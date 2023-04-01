<template>

 <!-- Content -->

 <div class="container-xxl flex-grow-1 container-p-y">
                        <div class="row">
                            <!-- Gamification Card -->
                            <div class="col-lg-4 col-md-6 col-12 mb-4">
                                <div class="card h-100">
                                    <div class="card-header">
                                        <h3 class="card-title mb-2">Collected Data</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="row align-items-end">
                                            <div class="col-6">
                                                <h1 class="display-6 text-primary mb-2 pt-4 pb-1">1187</h1>
                                            </div>
                                            <div class="col-6">
                                                <img src="../../../../../public/assets/img/illustrations/prize-light.png" width="140" height="150" class="rounded-start" alt="View Sales" data-app-light-img="illustrations/prize-light.png" data-app-dark-img="illustrations/prize-dark.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--/ Gamification Card -->

                            <!-- Multi Radial Chart -->
                            <div class="col-lg-4 col-md-6 col-12 mb-4">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h5 class="card-title mb-0">Issue Status</h5>
                                    </div>
                                    <div class="card-body">
                                        <div id="dataprocessRadialChart"></div>
                                    </div>
                                </div>
                            </div>
                            <!--/ Multi Radial Chart -->

                            <!-- Statistics cards & Revenue Growth Chart -->
                            <div class="col-lg-4 col-12">
                                <div class="row">
                                    <!-- Statistics Cards -->
                                    <div class="col-6 col-md-3 col-lg-6 mb-4">
                                        <div class="card h-100">
                                            <div class="card-body text-center">
                                                <div class="avatar mx-auto mb-2">
                                                    <span class="avatar-initial rounded-circle bg-label-success"><i class="bx bx-purchase-tag fs-4"></i
                            ></span>
                                                </div>
                                                <span class="d-block text-nowrap">Fake</span>
                                                <h2 class="mb-0">657</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3 col-lg-6 mb-4">
                                        <div class="card h-100">
                                            <div class="card-body text-center">
                                                <div class="avatar mx-auto mb-2">
                                                    <span class="avatar-initial rounded-circle bg-label-danger"><i class='bx bxs-duplicate fs-4'></i></span>
                                                </div>
                                                <span class="d-block text-nowrap">Duplicate</span>
                                                <h2 class="mb-0">240</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/ Statistics Cards -->
                                    <!-- Revenue Growth Chart -->
                                    <div class="col-12 col-md-6 col-lg-12 mb-4">
                                        <div class="card">
                                            <div class="card-header d-flex justify-content-between align-items-center pb-0">
                                                <h5 class="card-title mb-0">Monthly Processed Data</h5>
                                            </div>
                                            <div class="card-body pb-0">
                                                <div id="revenueGrowthChart"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/ Revenue Growth Chart -->
                                </div>
                            </div>
                            <!--/ Statistics cards & Revenue Growth Chart -->

                            <!-- Weekly Order Summary -->
                            <div class="col-xl-8 col-12 mb-4">
                                <div class="card">
                                    <div class="row row-bordered m-0">
                                        <!-- Order Summary -->
                                        <div class="col-md-8 col-12 px-0">
                                            <div class="card-header d-flex justify-content-between align-items-center">
                                                <h5 class="card-title mb-0">Prediction Summary</h5>
                                            </div>
                                            <div class="card-body p-0">
                                                <div id="orderSummaryChart"></div>
                                            </div>
                                        </div>
                                        <!-- Sales History -->
                                        <div class="col-md-4 col-12 px-0">
                                            <div class="card-header d-flex justify-content-between align-items-center">
                                                <h5 class="card-title mb-0">Prediction Overview</h5>
                                            </div>
                                            <div class="card-body">
                                                <h6 class="mt-1">Last Week</h6>
                                                <p class="mb-4">Performance 45% 🤩 better compare to last month</p>
                                                <ul class="list-unstyled m-0 pt-0">
                                                    <li class="mb-4">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="avatar avatar-sm flex-shrink-0 me-2">
                                                                <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-trending-up"></i
                                  ></span>
                                                            </div>
                                                            <div>
                                                                <p class="mb-0 lh-1 text-muted text-nowrap">Possibility of BD Vs India ODI Match</p>
                                                                <small class="fw-semibold text-nowrap">53.7/43.3</small>
                                                            </div>
                                                        </div>
                                                        <div class="progress" style="height: 6px">
                                                            <div class="progress-bar bg-primary" style="width: 53.7%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--/ Weekly Order Summary -->

                            <!-- Latest Update -->
                            <div class="col-md-6 col-lg-6 col-xl-4 col-xl-4 mb-4">
                                <div class="card">
                                    <div class="card-header d-flex align-items-center justify-content-between mb-3">
                                        <h5 class="card-title mb-0">Latest Issues</h5>
                                    </div>
                                    <div class="card-body h-px-230">
                                        <ul class="p-0 m-0">
                                            <li class="d-flex mb-4">
                                                <div class="avatar avatar-sm flex-shrink-0 me-3">
                                                    <span class="avatar-initial rounded-circle bg-label-primary"><i class="bx bx-cube"></i
                            ></span>
                                                </div>
                                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div class="me-2">
                                                        <p class="mb-0 lh-1">Onion</p>
                                                    </div>
                                                    <div class="item-progress">123</div>
                                                </div>
                                            </li>
                                            <li class="d-flex mb-4">
                                                <div class="avatar avatar-sm flex-shrink-0 me-3">
                                                    <span class="avatar-initial rounded-circle bg-label-info"><i class="bx bx-pie-chart-alt"></i
                            ></span>
                                                </div>
                                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div class="me-2">
                                                        <p class="mb-0 lh-1">Tiger</p>
                                                    </div>
                                                    <div class="item-progress">863</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--/ Latest Update -->

                            <!-- All Users -->
                            <div class="col-md-6 col-lg-6 col-xl-4 mb-4 mb-xl-0">
                                <div class="card h-100">
                                    <div class="card-header">
                                        <h5 class="card-title mb-2">Big Data Bank</h5>
                                        <h1 class="display-6 fw-normal mb-0">8,634,820</h1>
                                    </div>
                                    <div class="card-body">
                                        <div class="progress progress-stacked mb-3 mb-xl-5" style="height: 8px">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <ul class="p-0 m-0">
                                            <li class="mb-3 d-flex justify-content-between">
                                                <div class="d-flex align-items-center lh-1 me-3">
                                                    <span class="badge badge-dot bg-success me-2"></span> Politics
                                                </div>
                                                <div class="d-flex gap-3">
                                                    <span>29.5k</span>
                                                    <span class="fw-semibold">56%</span>
                                                </div>
                                            </li>
                                            <li class="mb-3 d-flex justify-content-between">
                                                <div class="d-flex align-items-center lh-1 me-3">
                                                    <span class="badge badge-dot bg-danger me-2"></span> Business
                                                </div>
                                                <div class="d-flex gap-3">
                                                    <span>25.7k</span>
                                                    <span class="fw-semibold">26%</span>
                                                </div>
                                            </li>
                                            <li class="mb-3 d-flex justify-content-between">
                                                <div class="d-flex align-items-center lh-1 me-3">
                                                    <span class="badge badge-dot bg-info me-2"></span> Health
                                                </div>
                                                <div class="d-flex gap-3">
                                                    <span>11.5k</span>
                                                    <span class="fw-semibold">34%</span>
                                                </div>
                                            </li>
                                            <li class="mb-3 d-flex justify-content-between">
                                                <div class="d-flex align-items-center lh-1 me-3">
                                                    <span class="badge badge-dot bg-primary me-2"></span> Crime
                                                </div>
                                                <div class="d-flex gap-3">
                                                    <span>48.5k</span>
                                                    <span class="fw-semibold">45%</span>
                                                </div>
                                            </li>
                                            <li class="mb-1 d-flex justify-content-between">
                                                <div class="d-flex align-items-center lh-1 me-3">
                                                    <span class="badge badge-dot bg-warning me-2"></span> Arms
                                                </div>
                                                <div class="d-flex gap-3">
                                                    <span>22.1k</span>
                                                    <span class="fw-semibold">7%</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--/ All Users -->

                            <!-- Marketing Campaigns -->
                            <div class="col-xl-8">
                                <div class="card">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h5 class="card-title mb-0">Issue History</h5>
                                    </div>
                                    <div class="table-responsive h-px-310">
                                        <table class="table border-top">
                                            <thead>
                                                <tr>
                                                    <th>Isue</th>
                                                    <th>Processing</th>
                                                    <th>Preparing</th>
                                                    <th>Processed</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-border-bottom-0">
                                                <tr>
                                                    <td class="text-nowrap">
                                                        Smart Watch
                                                    </td>
                                                    <td class="text-nowrap">28.5%</td>
                                                    <td>0</td>
                                                    <td><span class="text-success">0</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Tiger
                                                    </td>
                                                    <td>100%</td>
                                                    <td>100%</td>
                                                    <td><span class="text-success">100%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Onion
                                                    </td>
                                                    <td>23.8%</td>
                                                    <td>0</td>
                                                    <td><span class="text-danger">0</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Bangladeshi general election, 2023
                                                    </td>
                                                    <td>30.4%</td>
                                                    <td>0</td>
                                                    <td><span class="text-success">0</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!--/ Marketing Campaigns -->
                        </div>
                    </div>
                    <!--/ Content -->

</template>
