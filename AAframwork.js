<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.0
Version: 3.5
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->

<!-- BEGIN HEAD -->
<head>
<meta charset="utf-8"/>
<title>Metronic | Admin Dashboard Template</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="" name="description"/>
<meta content="" name="cynthia,johnny"/>
<link rel="shortcut icon" href="favicon.ico"/>

<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/>
<!-- END GLOBAL MANDATORY STYLES -->

<!-- BEGIN PAGE LEVEL PLUGIN STYLES -->
<link href="../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/plugins/jqvmap/jqvmap/jqvmap.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE LEVEL PLUGIN STYLES -->

<!-- BEGIN PAGE STYLES -->
<link href="../../assets/admin/pages/css/tasks.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE STYLES -->

<!-- BEGIN THEME STYLES -->
<link href="../../assets/global/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>
<link href="../../assets/global/css/plugins.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
<link href="../../assets/admin/layout/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
<link href="../../assets/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
<!-- END HEAD -->

<body class="page-header-fixed page-quick-sidebar-over-content page-style-square"> 

<!-- BEGIN HEADER -->
<div class="page-header navbar navbar-fixed-top">
	<!-- BEGIN HEADER INNER -->
	<div class="page-header-inner">
		<!-- BEGIN LOGO -->
		<div class="page-logo">
			<a href="index.html">
			<img src="../../assets/admin/layout/img/logo.png" alt="logo" class="logo-default"/>
			</a>
			<div class="menu-toggler sidebar-toggler hide">
				<!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
			</div>
		</div>
		<!-- END LOGO -->
		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
		<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
		</a>
		<!-- END RESPONSIVE MENU TOGGLER -->
		<!-- BEGIN TOP NAVIGATION MENU -->
		<div class="top-menu">
			<ul class="nav navbar-nav pull-right">
				<!-- BEGIN USER LOGIN DROPDOWN -->
				<!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
				<li class="dropdown dropdown-user">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<img alt="" class="img-circle" src="../../assets/admin/layout/img/avatar3_small.jpg"/>
					<span class="username username-hide-on-mobile">
					Cynthia </span>
					<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-menu-default">
						<li>
							<a href="user_account.html">
							<i class="icon-user"></i> 个人中心 </a>
						</li>
						<li class="divider">
						</li>
						<li>
							<a href="login.html">
							<i class="icon-key"></i> 退出登录 </a>
						</li>
					</ul>
				</li>
				<!-- END USER LOGIN DROPDOWN -->

			</ul>
		</div>
		<!-- END TOP NAVIGATION MENU -->
	</div>
	<!-- END HEADER INNER -->
</div>
<!-- END HEADER -->
<div class="clearfix">
</div>

<!-- BEGIN CONTAINER -->
<div class="page-container">
	<!-- BEGIN SIDEBAR -->
	<div class="page-sidebar-wrapper">
		<div class="page-sidebar navbar-collapse collapse">
			<!-- BEGIN SIDEBAR MENU -->
			<!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
			<!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
			<!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
			<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
			<!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
			<!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
			<ul class="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
				<!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
				<li class="sidebar-toggler-wrapper">
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					<div class="sidebar-toggler">
					</div>
					<!-- END SIDEBAR TOGGLER BUTTON -->
				</li>
				<!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
				<li class="sidebar-search-wrapper">
					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
					<!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
					<!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
					<form class="sidebar-search " action="extra_search.html" method="POST">
						<a href="javascript:;" class="remove">
						<i class="icon-close"></i>
						</a>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search...">
							<span class="input-group-btn">
							<a href="javascript:;" class="btn submit"><i class="icon-magnifier"></i></a>
							</span>
						</div>
					</form>
					<!-- END RESPONSIVE QUICK SEARCH FORM -->
				</li>
				<!-- 1 -->
				<li>
					<a href="javascript:;">
					<i class="icon-home"></i>
					<span class="title">系统管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-cogs"></i> 内部设置<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="system_inside_companyInfo.html"><i class="fa fa-adjust"></i> 公司信息</a>
								</li>
								<li>
									<a href="system_inside_resourceManager.html"><i class="fa fa-cube"></i> 资源管理</a>
								</li>
								<li>
									<a href="system_inside_dataTemplate.html"><i class="fa fa-database"></i> 数据模板</a>
								</li>
								<li>
									<a href="system_inside_alertSetting.html"><i class="fa fa-bell"></i> 提醒设置</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-bookmark-o"></i> 系统配置 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="system_cofig_companyInfo.html"><i class="fa fa-adjust"></i> 公司信息</a>
								</li>
								<li>
									<a href="system_cofig_dataInport.html"><i class="fa fa-book"></i> 数据导入</a>
								</li>
								<li>
									<a href="system_cofig_workCalendar.html"><i class="fa fa-calendar"></i> 工作日历</a>
								</li>
								<li>
									<a href="system_cofig_position.html"><i class="fa fa-group"></i> 部门岗位</a>
								</li>
								<li>
									<a href="system_cofig_teamSchedules.html"><i class="fa fa-gamepad"></i> 班组班次</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-eye"></i> 权限设置 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="system_access_role.html"><i class="fa fa-eye-slash"></i> 设置角色</a>
								</li>
								<li>
									<a href="system_access_client.html"><i class="fa fa-female"></i> 设置用户</a>
								</li>
								<li>
									<a href="system_access_select.html"><i class="fa  fa-dot-circle-o"></i> 查询权限</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-gavel"></i> 辅助配置 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="system_extra_alert.html"><i class="fa fa-bell"></i> 提醒设置</a>
								</li>
								<li>
									<a href="system_extra_equipment.html"><i class="fa fa-glass"></i> 资产设备</a>
								</li>
								<li>
									<a href="system_extra_workCentre.html"><i class="fa fa-graduation-cap"></i> 工作中心</a>
								</li>
								<li>
									<a href="system_extra_gloaSetting.html"><i class="fa fa-flag-o"></i> 目标设置</a>
								</li>
								<li>
									<a href="system_extra_trade.html"><i class="fa fa-laptop"></i> 货代设置</a>
								</li>
								<li>
									<a href="system_extra_material.html"><i class="fa fa-hdd-o"></i> 物料对应</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 2 -->
				<li>
					<a href="javascript:;">
					<i class="icon-user"></i>
					<span class="title">人事管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-pencil-square"></i> 职工信息<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="person_workersInfor_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="person_workersInfor_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-caret-square-o-down"></i> 职工管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="person_workersManage_education.html"><i class="fa fa-building-o"></i> 教育培训</a>
								</li>
								<li>
									<a href="person_workersManage_trackRecod.html"><i class="fa fa-cab"></i> 表现记录</a>
								</li>
								<li>
									<a href="person_workersManage_leaveMange.html"><i class="fa fa-bullseye"></i> 离职管理</a>
								</li>
								<li>
									<a href="person_workersManage_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="icon-wallet"></i> 绩效管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="person_KPI_firstEvaluation.html"><i class="fa fa-filter"></i> 初评</a>
								</li>
								<li>
									<a href="person_KPI_reEvaluation.html"><i class="fa fa-fire"></i> 复评</a>
								</li>
								<li>
									<a href="person_KPI_finalEvaluation.html"><i class="fa fa-flash"></i> 决评</a>
								</li>
								<li>
									<a href="person_KPI_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 3 -->
				<li>
					<a href="javascript:;">
					<i class="icon-rocket"></i>
					<span class="title">工程管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-cubes"></i> 物料管理<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="project_meterial_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="project_meterial_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="project_meterial_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="project_meterial_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="project_meterial_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-file-pdf-o"></i> BOM管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="project_BOM_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="project_BOM_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="project_BOM_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="project_BOM_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="project_BOM_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-random"></i> 工艺路线 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="project_craft_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="project_craft_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="project_craft_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="project_craft_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="project_craft_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-inbox"></i> 高级功能 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="project_high_BOMquery.html"><i class="fa fa-headphones"></i> BOM查询</a>
								</li>
								<li>
									<a href="project_high_craftCompare.html"><i class="fa fa-gift"></i> 工艺比较</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 4 -->
				<li>
					<a href="javascript:;">
					<i class="icon-tag"></i>
					<span class="title">销售管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-user"></i> 客户信息<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_custometInfo_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="sale_custometInfo_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="sale_custometInfo_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="sale_custometInfo_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-ticket"></i> 物料对照 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_meterial_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="sale_meterial_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="sale_meterial_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="sale_meterial_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-anchor"></i> 销售价格 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_price_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="sale_price_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="sale_price_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="sale_price_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="sale_price_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-life-ring"></i> 销售订单 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_order_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="sale_order_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="sale_order_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="sale_order_giveOut.html"><i class="fa fa-thumb-tack"></i> 分发</a>
								</li>
								<li>
									<a href="sale_order_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="sale_order_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-retweet"></i> 销售发货 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_stream_notice.html"><i class="fa fa-bell"></i> 通知</a>
								</li>
								<li>
									<a href="sale_stream_delivery.html"><i class="fa fa-puzzle-piece"></i> 发货</a>
								</li>
								<li>
									<a href="sale_stream_entry.html"><i class="fa fa-phone-square"></i> 报关</a>
								</li>
								<li>
									<a href="sale_stream_deliveryQuery.html"><i class="fa fa-search-minus"></i> 发货查询</a>
								</li>
								<li>
									<a href="sale_stream_entryQuery.html"><i class="fa fa-refresh"></i> 报关查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-tachometer"></i> 销售对账 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="sale_check_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="sale_check_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="sale_check_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 5 -->
				<li>
					<a href="javascript:;">
					<i class="icon-basket"></i>
					<span class="title">采购管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-sitemap"></i> 供应商管理<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_vendor_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_vendor_appraise.html"><i class="fa fa-road"></i> 评审</a>
								</li>
								<li>
									<a href="purchase_vendor_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="purchase_vendor_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="purchase_vendor_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="purchase_vendor_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-desktop"></i> 物料对照 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_meterial_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_meterial_approval.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="purchase_meterial_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="purchase_meterial_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-building"></i> 采购价格 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_price_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_price_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="purchase_price_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="purchase_price_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="purchase_price_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-inbox"></i> 采购计划 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_plan_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_plan_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="purchase_plan_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-signal"></i> 采购实施 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_execute_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_execute_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="purchase_execute_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="purchase_execute_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="purchase_execute_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="purchase_execute_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-send-o"></i> 采购对账 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="purchase_checking_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="purchase_checking_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="purchase_checking_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 6 -->
				<li>
					<a href="javascript:;">
					<i class="icon-docs"></i>
					<span class="title">计划管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-tasks"></i> 物料计划<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="plan_meterial_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="plan_meterial_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="plan_meterial_giveOut.html"><i class="fa fa-thumb-tack"></i> 分发</a>
								</li>
								<li>
									<a href="plan_meterial_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa  fa-file-word-o"></i> 生产计划 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="plan_production_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="plan_production_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="plan_production_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 7 -->
				<li>
					<a href="javascript:;">
					<i class="icon-puzzle"></i>
					<span class="title">生产管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-pied-piper-alt"></i> 生产工单<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="production_worksheet_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="production_worksheet_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="production_worksheet_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="production_worksheet_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="production_worksheet_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-bar-chart-o"></i> 生产日报 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="production_daily_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="production_daily_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="production_daily_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="production_daily_entry.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-slack"></i> 补料申请 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="production_meterialReq_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="production_meterialReq_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="production_meterialReq_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="production_meterialReq_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 8 -->
				<li>
					<a href="javascript:;">
					<i class="icon-wallet"></i>
					<span class="title">库存管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-book"></i> 采购入库<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_purchase_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_purchase_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_purchase_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_purchase_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-anchor"></i> 自制入库 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_homeStorage_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_homeStorage_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_homeStorage_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_homeStorage_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-external-link"></i> 销售出库 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_EAS_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_EAS_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_EAS_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_EAS_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
								<li>
									<a href="stock_EAS_order.html"><i class="fa fa-pencil-square-o"></i> 送货单</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-arrow-up"></i> 领料出库<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_MoutPro_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_MoutPro_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_MoutPro_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_MoutPro_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-strikethrough"></i> 供应商退料 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_vendorReturn_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_vendorReturn_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_vendorReturn_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_vendorReturn_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-lightbulb-o"></i> 客户退货 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_customerReturn_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_customerReturn_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_customerReturn_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_customerReturn_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-legal"></i> 内部退料<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_InterReturn_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_InterReturn_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_InterReturn_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="stock_InterReturn_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-database"></i> 库存查询 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_stockQuery_num.html"><i class="fa fa-sort-numeric-desc"></i> 数量</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-university"></i> 库存盘点 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="stock_stockCount_create.html"><i class="fa fa-star-half-full"></i> 生成</a>
								</li>
								<li>
									<a href="stock_stockCount_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="stock_stockCount_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="stock_stockCount_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="stock_stockCount_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 9 -->
				<li>
					<a href="javascript:;">
					<i class="icon-pencil"></i>
					<span class="title">质量管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-suitcase"></i> 检验计划<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_testPlan_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_testPlan_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_testPlan_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="quality_testPlan_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="quality_testPlan_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-barcode"></i> 样品检验 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_sampleTest_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_sampleTest_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_sampleTest_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="quality_sampleTest_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa  fa-credit-card"></i> 入库检验 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_storageTest_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_storageTest_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_storageTest_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="quality_storageTest_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-bullhorn"></i> 制程检验<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_processTest_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_processTest_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_processTest_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="quality_processTest_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-codepen"></i> 成品检验 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_jobTest_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_jobTest_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_jobTest_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="quality_jobTest_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-joomla"></i> 出货检验 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="quality_OQC_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="quality_OQC_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="quality_OQC_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="quality_OQC_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 10 -->
				<li>
					<a href="javascript:;">
					<i class="icon-briefcase"></i>
					<span class="title">行政管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-fax"></i> 行政请购 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="government_req_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="government_req_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="government_req_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="government_req_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-beer"></i> 行政采购<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="government_purchase_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="government_purchase_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="government_purchase_approval.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="government_purchase_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-bars"></i> 领用管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="government_receiveQuery_storage.html"><i class="fa fa-folder-open-o"></i> 入库</a>
								</li>
								<li>
									<a href="government_receiveQuery_get.html"><i class="fa fa-flag-checkered"></i> 领用</a>
								</li>
								<li>
									<a href="government_receiveQuery_return.html"><i class="fa fa-magnet"></i> 归还</a>
								</li>
								<li>
									<a href="government_receiveQuery_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 11 -->
				<li>
					<a href="javascript:;">
					<i class="icon-globe"></i>
					<span class="title">外协管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-file-text"></i> 厂商管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_firms_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_firms_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_firms_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="outsource_firms_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="outsource_firms_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-sort-alpha-desc"></i> 内部入库 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_interStorage_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_interStorage_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_interStorage_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_interStorage_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-unlock"></i> 外协出库 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_MoutPro_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_MoutPro_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_MoutPro_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_MoutPro_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-share-alt"></i> 外协入库 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_storage_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_storage_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_storage_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_storage_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-shield"></i> 外协领料 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_getMeterial_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_getMeterial_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_getMeterial_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_getMeterial_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-italic"></i> 内部退料 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_interReturn_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_interReturn_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_interReturn_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_interReturn_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-copy"></i> 内部退货 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_interReutnPro_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_interReutnPro_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_interReutnPro_count.html"><i class="fa fa-sliders"></i> 清点</a>
								</li>
								<li>
									<a href="outsource_interReutnPro_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-align-center"></i> 外协库存 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_stock_num.html"><i class="fa fa-sort-numeric-desc"></i> 数量</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-unlink"></i> 外协扣款 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_cutPayment_setting.html"><i class="fa fa-cogs"></i> 设置</a>
								</li>
								<li>
									<a href="outsource_cutPayment_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_cutPayment_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="outsource_cutPayment_change.html"><i class="fa fa-scissors"></i> 修改</a>
								</li>
								<li>
									<a href="outsource_cutPayment_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-sun-o"></i> 外协对账 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="outsource_checking_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="outsource_checking_confirm.html"><i class="fa fa-check-square-o"></i> 确认</a>
								</li>
								<li>
									<a href="outsource_checking_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 12 -->
				<li>
					<a href="javascript:;">
					<i class="icon-settings"></i>
					<span class="title">工具管理</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-reorder"></i> 公告管理<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="tool_notice_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="tool_notice_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="tool_notice_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="tool_notice_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-file"></i> 文件管理 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="tool_file_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="tool_file_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="tool_file_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="tool_file_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-list-alt"></i> 会议记录 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="tool_meeting_uphold.html"><i class="fa fa-wrench"></i> 维护</a>
								</li>
								<li>
									<a href="tool_meeting_review.html"><i class="fa fa-indent"></i> 审核</a>
								</li>
								<li>
									<a href="tool_meeting_approval.html"><i class="fa fa-floppy-o"></i> 核准</a>
								</li>
								<li>
									<a href="tool_meeting_update.html"><i class="fa fa-spinner"></i> 更新</a>
								</li>
								<li>
									<a href="tool_meeting_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- 13 -->
				<li>
					<a href="javascript:;">
					<i class="icon-bar-chart"></i>
					<span class="title">报表查询</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="javascript:;">
							<i class="fa fa-align-right"></i> 月报查询<span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="report_monthly_project.html"><i class="icon-rocket"></i> 工程</a>
								</li>
								<li>
									<a href="report_monthly_sale.html"><i class="icon-tag"></i> 销售</a>
								</li>
								<li>
									<a href="report_monthly_purchase.html"><i class="fa fa-file-text-o"></i> 采购</a>
								</li>
								<li>
									<a href="report_monthly_quality.html"><i class="fa fa-chain"></i> 质量</a>
								</li>
								<li>
									<a href="report_monthly_plan.html"><i class="fa fa-clipboard"></i> 计划</a>
								</li>
								<li>
									<a href="report_monthly_production.html"><i class="fa  fa-sort-alpha-desc"></i> 生产</a>
								</li>
								<li>
									<a href="report_monthly_stock.html"><i class="fa fa-database"></i> 库存</a>
								</li>
								<li>
									<a href="report_monthly_outsource.html"><i class="fa fa-file-code-o"></i> 外协</a>
								</li>
								<li>
									<a href="report_monthly_hr.html"><i class="fa fa-users"></i> 人事</a>
								</li>
								<li>
									<a href="report_monthly_government.html"><i class="fa  fa-volume-off"></i> 行政</a>
								</li>
								<li>
									<a href="report_monthly_finance.html"><i class="fa fa-cny"></i> 财务</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-hdd-o"></i> 进程查询 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="report_process_query.html"><i class="fa fa-search"></i> 查询</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa  fa-life-ring"></i> 汇总查询 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="report_summary_project.html"><i class="icon-rocket"></i> 工程</a>
								</li>
								<li>
									<a href="report_summary_sale.html"><i class="fa icon-tag"></i> 销售</a>
								</li>
								<li>
									<a href="report_summary_purchase.html"><i class="fa fa-file-text-o"></i> 采购</a>
								</li>
								<li>
									<a href="report_summary_quality.html"><i class="fa fa-chain"></i> 质量</a>
								</li>
								<li>
									<a href="report_summary_plan.html"><i class="fa fa-clipboard"></i> 计划</a>
								</li>
								<li>
									<a href="report_summary_production.html"><i class="fa fa-sort-alpha-desc"></i> 生产</a>
								</li>
								<li>
									<a href="report_summary_stock.html"><i class="fa fa-database"></i> 库存</a>
								</li>
								<li>
									<a href="report_summary_outsource.html"><i class="fa fa-file-code-o"></i> 外协</a>
								</li>
								<li>
									<a href="report_summary_hr.html"><i class="fa fa-users"></i> 人事</a>
								</li>
								<li>
									<a href="report_summary_government.html"><i class="fa fa-volume-off"></i> 行政</a>
								</li>
								<li>
									<a href="report_summary_finance.html"><i class="fa fa-cny"></i> 财务</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="javascript:;">
							<i class="fa fa-eye"></i> 单据查询 <span class="arrow"></span>
							</a>
							<ul class="sub-menu">
								<li>
									<a href="report_ticket_project.html"><i class="icon-rocket"></i> 工程</a>
								</li>
								<li>
									<a href="report_ticket_sale.html"><i class="fa icon-tag"></i> 销售</a>
								</li>
								<li>
									<a href="report_ticket_purchase.html"><i class="fa fa-file-text-o"></i> 采购</a>
								</li>
								<li>
									<a href="report_ticket_quality.html"><i class="fa fa-chain"></i> 质量</a>
								</li>
								<li>
									<a href="report_ticket_plan.html"><i class="fa fa-clipboard"></i> 计划</a>
								</li>
								<li>
									<a href="report_ticket_production.html"><i class="fa fa-sort-alpha-desc"></i> 生产</a>
								</li>
								<li>
									<a href="report_ticket_stock.html"><i class="fa fa-database"></i> 库存</a>
								</li>
								<li>
									<a href="report_ticket_outsource.html"><i class="fa fa-file-code-o"></i> 外协</a>
								</li>
								<li>
									<a href="report_ticket_hr.html"><i class="fa fa-users"></i> 人事</a>
								</li>
								<li>
									<a href="report_ticket_government.html"><i class="fa fa-volume-off"></i> 行政</a>
								</li>
								<li>
									<a href="report_ticket_finance.html"><i class="fa fa-cny"></i> 财务</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>
	</div>
	<!-- END SIDEBAR -->
	<!-- BEGIN CONTENT -->
	<div class="page-content-wrapper">
		<div class="page-content">
			<!-- BEGIN PAGE HEADER-->
			<h3 class="page-title">
			Dashboard <small>reports & statistics</small>
			</h3>
			<div class="page-bar">
				<ul class="page-breadcrumb">
					<li>
						<i class="fa fa-home"></i>
						<a href="index.html">Home</a>
						<i class="fa fa-angle-right"></i>
					</li>
					<li>
						<a href="#">Dashboard</a>
					</li>
				</ul>
				<div class="page-toolbar">
					<div id="dashboard-report-range" class="pull-right tooltips btn btn-fit-height grey-salt" data-placement="top" data-original-title="Change dashboard date range">
						<i class="icon-calendar"></i>&nbsp;
						<span class="thin uppercase visible-lg-inline-block">&nbsp;</span>&nbsp;
						<i class="fa fa-angle-down"></i>
					</div>
				</div>
			</div>
			<!-- END PAGE HEADER-->
		</div>
	</div>
	<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<!-- BEGIN FOOTER -->
<div class="page-footer">
	<div class="page-footer-inner">
		CopyRight @ 2015 FIMS - Cynthia && Johnny
	</div>
	<div class="scroll-to-top">
		<i class="icon-arrow-up"></i>
	</div>
</div>
<!-- END FOOTER -->

<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="../../assets/global/plugins/respond.min.js"></script>
<script src="../../assets/global/plugins/excanvas.min.js"></script> 
<![endif]-->
<script src="../../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
<!-- IMPORTANT! Load jquery-ui-1.10.3.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
<script src="../../assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->

<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="../../assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/flot/jquery.flot.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/flot/jquery.flot.resize.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/flot/jquery.flot.categories.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap-daterangepicker/moment.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.js" type="text/javascript"></script>
<!-- IMPORTANT! fullcalendar depends on jquery-ui-1.10.3.custom.min.js for drag & drop support -->
<script src="../../assets/global/plugins/fullcalendar/fullcalendar.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js" type="text/javascript"></script>
<script src="../../assets/global/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->

<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="../../assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="../../assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="../../assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="../../assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="../../assets/admin/pages/scripts/index.js" type="text/javascript"></script>
<script src="../../assets/admin/pages/scripts/tasks.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->

<script>
jQuery(document).ready(function() {    
   Metronic.init(); // init metronic core componets
   Layout.init(); // init layout
   QuickSidebar.init(); // init quick sidebar
   Demo.init(); // init demo features 
   Index.init();   
   Index.initDashboardDaterange();
   Index.initJQVMAP(); // init index page's custom scripts
   Index.initCalendar(); // init index page's custom scripts
   Index.initCharts(); // init index page's custom scripts
   Index.initChat();
   Index.initMiniCharts();
   Tasks.initDashboardWidget();
});
</script>
</body>
</html>