import { Component, OnInit } from '@angular/core';
import { RoutersList } from '@app/view/layout/header/interface';
import { FormUtil } from '@utils/web';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { DemoTableApiService } from '@api/demo-table-api.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { IPaginationResponse } from '@core/net/interface/HttpResponse';
import { TableItem } from '@app/view/routes/demo-table/interface';
import { GENDER_LIST } from '@app/store/common';

@Component({
  selector: 'com-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss'],
  providers: [DemoTableApiService]
})
export class DemoTableComponent implements OnInit {
  routersList: RoutersList[]; // 面包屑路由路径
  validateForm: FormGroup;
  formUtil: FormUtil; // form表单工具类
  isShowEdit = false; // 是否显示编辑弹窗
  isConfirmLoading = false; // 表单提交中
  tableData$ = new Subject(); // 表格数据数据流
  _loading = false; // 表格加载状态
  _total = 0; // 表格数据总条数
  _current = 1; // 当前页数
  _pageSize = 20; // 分页条数
  _tableData = []; // 表格数据
  _tableConfig = [ // 表格列配置
    {
      title: '用户名',
      fieldName: 'username'
    },
    {
      title: '操作',
      fieldName: 'operate'
    },
    {
      title: '是否删除',
      fieldName: 'is_delete'
    },
    {
      title: '手机号码',
      fieldName: 'telephone'
    },
    {
      title: '邮箱',
      fieldName: 'email'
    },
    {
      title: '兴趣',
      fieldName: 'interest'
    },
    {
      title: '性别',
      fieldName: 'gender'
    },
    {
      title: '所属系统角色',
      fieldName: 'user_role'
    },
    {
      title: '居住城市',
      fieldName: 'home'
    },
    {
      title: '创建时间',
      fieldName: 'create_datetime'
    }
  ];
  genderList = GENDER_LIST; // 性别列表
  is_delete = null; // 是否删除
  gender = []; // 已选择的性别
  username = ''; // 用户名
  constructor(
    private fb: FormBuilder,
    private apiService: DemoTableApiService
  ) { }

  ngOnInit() {
    // 设置面包屑路径
    this.setRouterList();
    this.buildForm(); // 创建表单验证器
    // 订阅表格数据流
    this.tableData$
    .pipe(debounceTime(500), switchMap(params => this.apiService.getTableData(params)))
    .subscribe((res: IPaginationResponse<TableItem>) => {
      const result = res.result;
      this._total = result.total_count;
      this._tableData = result.item;
      this._loading = false;
    }, err => {
      console.log(err);
      this._loading = false;
    });
    // 获取页面初始化配置数据
    this.initConfig();
  }
  /**
   * 设置顶部面包屑目录
   */
  setRouterList() {
    this.routersList = [
      {
        title: '一级菜单',
        path: ''
      },
      {
        title: '二级菜单',
        path: '/demo-table'
      }
    ];
  }
  async initConfig() {
    this.refreshData();
  }
  buildForm() {
    this.validateForm = this.fb.group({

    });
  }
  /* 刷新表格数据 */
  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    const params = {
      page_index: this._current,
      page_size: this._pageSize,
      gender: this.gender,
      username: this.username,
      is_delete: this.is_delete
    };
    this._loading = true;
    this.tableData$.next(params);
  }
  /* 重置表格数据 */
  reset() {
    this.gender = [];
    this.username = '';
    this.is_delete = null;
  }
  openEdit(data) {
    this.isShowEdit = true;
  }
}
