export default {
    name: "main",
    path: "/main",
    redirect: "/main/project-list",
    meta: {
        name: "碳汇项目"
    },
    component: () =>
        import ("@/views/manage/main/index.vue"),
    children: [{
            name: "project-list",
            path: "project-list",
            icon: 'el-icon-notebook-2', // 图标名称
            redirect: "project-list/list-view",
            meta: {
                name: "项目列表",
                isMenus: true,
                userType: [1, 4]
            },
            component: () =>
                import ("@/views/manage/project-list/index.vue"),
            children: [{
                    name: "list-view",
                    path: "list-view",
                    icon: 'el-icon-notebook-2', // 图标名称
                    meta: {
                        name: "项目列表",
                    },
                    component: () =>
                        import ("@/views/manage/project-list/list-view.vue")
                },
                {
                    name: "list-detail",
                    path: "list-detail",
                    meta: {
                        name: "项目详情"
                    },
                    component: () =>
                        import ("@/views/manage/project-detail/list-detail.vue")
                }
            ]
        },
        {
            name: "project-list-jg",
            path: "project-list-jg",
            icon: 'el-icon-notebook-2',
            meta: {
                name: "项目列表(机构)",
                isMenus: true,
                userType: [1, 3]
            },
            component: () =>
                import ("@/views/manage/project-list-jg/index.vue")
        },
        {
            name: "project-list-fgw",
            path: "project-list-fgw",
            icon: 'el-icon-notebook-2',
            meta: {
                name: "项目列表(发改委)",
                isMenus: true,
                userType: [1, 2]
            },
            component: () =>
                import ("@/views/manage/project-list-fgw/index.vue")
        },
        {
            name: "all-query",
            path: "all-query",
            icon: 'el-icon-search',
            redirect: "all-query/query-view",
            meta: {
                name: "综合查询",
                isMenus: true,
                userType: [1, 2]
            },
            component: () =>
                import ("@/views/manage/all-query/index.vue"),
            children: [{
                    meta: {
                        name: "综合查询"
                    },
                    name: "query-view",
                    path: "query-view",
                    component: () =>
                        import ("@/views/manage/all-query/query-view.vue")
                },
                {
                    name: "query-detail",
                    path: ":id",
                    component: () =>
                        import ("@/views/manage/project-detail/list-detail.vue")
                }
            ]
        },

        {
            name: "user-manage",
            path: "user-manage",
            icon: 'el-icon-user',
            meta: {
                name: "用户管理",
                isMenus: true,
                userType: [1]
            },
            component: () =>
                import ("@/views/manage/user-manage/index.vue")
        },
        {
            name: "project-register",
            path: "project-register",
            icon: 'el-icon-edit',
            meta: {
                name: "项目注册",
                isMenus: true,
                userType: [4]
            },
            component: () =>
                import ("@/views/manage/project-register/index.vue")
        },
        {
            name: "artical",
            path: "artical",
            icon: 'el-icon-document',
            meta: {
                name: "文章管理",
                isMenus: true,
                userType: [1]
            },
            component: () =>
                import ("@/views/manage/artical/index.vue"),
            children: [{
                    name: "editArtical",
                    path: "editArtical",
                    component: () =>
                        import ("@/views/manage/artical/EditArtical.vue")
                },
                {
                    name: "showArtical",
                    path: "showArtical",
                    component: () =>
                        import ("@/views/manage/artical/ShowArtical.vue")
                }
            ]
        },

        {
            name: "carbonforecast",
            path: "carbonforecast",
            icon: 'el-icon-data-line',
            meta: {
                name: "碳汇预测",
                isMenus: true,
                userType: [3, 4]
            },
            component: () =>
                import ("@/views/manage/carbon-forecast/index.vue")
        },
        {
            name: "carbonmeasure",
            path: "carbonmeasure",
            icon: 'el-icon-data-board',
            meta: {
                name: "碳汇计量",
                isMenus: true,
                userType: [3]
            },
            component: () =>
                import ("@/views/manage/carbon-measure/index.vue")
        },
        {
            name: "statistics-analysis",
            path: "statistics-analysis",
            icon: 'el-icon-s-data',
            meta: {
                name: "统计分析",
                isMenus: true,
                userType: [1, 2]
            },
            component: () =>
                import ("@/views/manage/statistics-analysis/index.vue")
        },
        {
            name: "reduce-manange",
            path: "reduce-manange",
            redirect: "reduce-manange/reduce-view",
            icon: 'el-icon-document',
            meta: {
                name: "减排量管理",
                isMenus: true,
                userType: [1, 2, 3]
            },
            component: () =>
                import ("@/views/manage/reduce-manange/index.vue"),
            children: [{
                    meta: {
                        name: "减排量管理"
                    },
                    name: "reduce-view",
                    path: "reduce-view",
                    component: () =>
                        import ("@/views/manage/reduce-manange/reduce-view.vue")
                },
                {
                    name: "reduce-detail",
                    path: ":id",
                    component: () =>
                        import ("@/views/manage/project-detail/list-detail.vue")
                }
            ]
        },
        {
            name: "issue-manage",
            path: "issue-manage",
            icon: 'el-icon-document',
            meta: {
                name: "已签发减排量",
                isMenus: true,
                userType: [1, 4],
                icon: '',
            },
            component: () =>
                import ("@/views/manage/issue-manage/index.vue")
        },
        {
            name: "ccer-manage",
            path: "ccer-manage",
            icon: 'el-icon-s-management',
            redirect: "ccer-manage/ccer-list",
            meta: {
                name: "审定与核证机构管理",
                isMenus: true,
                userType: [1, 2]
            },
            component: () =>
                import ("@/views/manage/ccer-manage/index.vue"),
            children: [{
                    name: "ccer-list",
                    path: "ccer-list",
                    meta: {
                        name: "审定与核证机构管理",
                        // isMenus: true,
                        // userType: [1, 2]
                    },
                    component: () =>
                        import ("@/views/manage/ccer-manage/ccer-list.vue")
                },
                {
                    name: "ccer-add",
                    path: "ccer-add",
                    meta: {
                        name: "新建"
                    },
                    component: () =>
                        import ("@/views/manage/ccer-manage/ccer-add.vue")
                },
                {
                    name: "ccer-detail",
                    path: ":id",
                    meta: {
                        name: "详情"
                    },
                    component: () =>
                        import ("@/views/manage/ccer-manage/ccer-detail.vue")
                }
            ]
        },
        {
            name: "template",
            path: "template",
            icon: 'el-icon-mobile',
            meta: {
                name: "模板样式管理",
                isMenus: true,
                userType: [1, 3]
            },
            component: () =>
                import ("@/views/manage/template-manage/index.vue")
        },
        {
            name: "changepass",
            path: "changepass",
            icon: 'el-icon-edit',
            meta: {
                name: "密码修改",
                isMenus: true,
                userType: [1, 2, 3, 4]
            },
            component: () =>
                import ("@/views/manage/change-pass/index.vue")
        },
    ]
};