<template>
    <div>
        <aside id="layout-menu" class="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
                        <div class="container-xxl d-flex h-100">
                            <ul class="menu-inner">
                                <!-- Dashboards -->
                                <li class="menu-item active">
                                    <a href="home" class="menu-link">
                                        <i class="menu-icon tf-icons bx bx-home-circle"></i>
                                        <div data-i18n="Dashboards">Dashboard</div>
                                    </a>
                                </li>

                                <li class="menu-item">
                                    <a href="webmanager" class="menu-link">
                                        <i class="menu-icon tf-icons bx bx-trending-up me-1"></i>
                                        <div data-i18n="Web Manager">Web Manager</div>
                                    </a>
                                </li>

                                <li class="menu-item ">
                                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                                        <i class='menu-icon tf-icons bx bx-world me-1'></i>
                                        <div data-i18n="Deep Web Manager">Deep Web Manager</div>
                                    </a>
                                    <ul class="menu-sub ">
                                        <li class="menu-item ">
                                            <a href="deep_webmanager_record" class="menu-link">
                                                <i class='menu-icon tf-icons bx bxs-data'></i>
                                                <div data-i18n="Record">Record</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="deep_webmanager_source" class="menu-link">
                                                <i class='menu-icon tf-icons bx bxs-package'></i>
                                                <div data-i18n="Source">Source</div>
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li class="menu-item ">
                                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                                        <i class='menu-icon tf-icons me-1 bx bxs-cloud'></i>
                                        <div data-i18n="Dark Web Manager">Dark Web Manager</div>
                                    </a>
                                    <ul class="menu-sub ">
                                        <li class="menu-item ">
                                            <a href="dark_webmanager_record" class="menu-link">
                                                <i class='menu-icon tf-icons bx bxs-data'></i>
                                                <div data-i18n="Record">Record</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="dark_webmanager_source" class="menu-link">
                                                <i class='menu-icon tf-icons bx bxs-package'></i>
                                                <div data-i18n="Source">Source</div>
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li class="menu-item">
                                    <a href="data_segregation" class="menu-link">
                                        <i class="menu-icon tf-icons bx bxs-dashboard me-1"></i>
                                        <div data-i18n="Data Segregation">Data Segregation</div>
                                    </a>
                                </li>

                                <li class="menu-item">
                                    <a href="data_analyzer" class="menu-link">
                                        <i class='menu-icon tf-icons me-1 bx bx-scatter-chart'></i>

                                        <div data-i18n="Data Analyzer">Data Analyzer</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="issue_tracker" class="menu-link">
                                        <i class='menu-icon tf-icons me-1 bx bxl-deezer'></i>
                                        <div data-i18n="Issue Tracker">Issue Tracker</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="predictor" class="menu-link">
                                        <i class='menu-icon tf-icons me-1 bx bxs-pie-chart-alt-2'></i>
                                        <div data-i18n="Predictor">Predictor</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="reporting" class="menu-link">
                                        <i class='menu-icon tf-icons me-1 bx bxs-book-content'></i>
                                        <div data-i18n="Custom Report">Custom Report</div>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="javascript:void(0)" class="menu-link menu-toggle">
                                        <i class='menu-icon tf-icons bx bxs-cog me-1'></i>
                                        <div data-i18n="Settings">Settings</div>
                                    </a>
                                    <ul class="menu-sub">
                                        <li class="menu-item">
                                            <a href="user_settings" class="menu-link">
                                                <i class='menu-icon tf-icons bx bx-user'></i>
                                                <div data-i18n="User Settings">User Settings</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="communication_settings" class="menu-link">
                                                <i class='menu-icon tf-icons bx bx-envelope'></i>
                                                <div data-i18n="Communication Settings">Communication Settings</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="users" class="menu-link">
                                                <i class='menu-icon tf-icons bx bx-user-plus'></i>
                                                <div data-i18n="Users">Users</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="accesscontrol" class="menu-link">
                                                <i class='menu-icon tf-icons bx bx-user-check'></i>
                                                <div data-i18n="Roles">Roles</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="log" class="menu-link">
                                                <i class='menu-icon tf-icons bx bx-list-ol'></i>
                                                <div data-i18n="System Log">System Log</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </aside>
    </div>
</template>
