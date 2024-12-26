

<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/components.css" rel="stylesheet">
    <link href="assets/css/media.css" rel="stylesheet">
    <link href="assets/css/chat.css" rel="stylesheet">
    <title>FourtyFour</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js">
    </script>

    <style>




              body {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                background-color: #000000;
              }

      body {
        margin: 0;
      }
              .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                padding: 10px;
                background-color: #3A91D8;
              }

              .logo {
                display: flex;
                align-items: center;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 27px;
                font-weight: bold;
              }

              .logo img {
                height: 40px;
                margin-right: 10px;
              }

              .navigation {
                display: flex;
                align-items: center;
              }

              .navigation a {
                color: white;
                margin-right: 10px;
                text-decoration: none;
              }




            .titles {
              display:block;
              align-items: center;
              color:#2e2e28;
              font-size: 21px;
            }

            ion-buttons {
              color:#2e2e28;
            }


              @media (max-width: 767px) {
                .header {
                  flex-direction: row;
                  align-items: center;
                  padding: 1px;
                  justify-content: space-between;
                  padding-top: 12px;
                }
                .toggle-btn {
                  display: block;
                  background-color: #577BDC;
                  color: white;
                  padding: 19px;
                  border: none;
                  cursor: pointer;
                }
                .logo {
                  margin-right: 0;
                }
                .navigation {
                  flex-direction: row;
                  align-items: center;
                }
                .navigation a {
                  margin-bottom: 5px;
                  margin-right: 10px;
                }
                .content {
                  flex: 1;
                  padding: 20px;
                  margin-left: 0; /* Menghapus margin left pada layar <= 767px */
                  overflow: auto;
                }
                .sidebar {
                    display: none; /* Menyembunyikan sidebar pada layar <= 767px */
                }

                .scrolller {
                  flex: 1;
                  padding: 20px;
                  overflow: auto;
                }

                #page-content-wrapper {
                  right: -6;
                }

              }


      /*Dark Themes*/
            body.dark {
                /* Dark mode variables go here */

                background-color: #121212;
              }
            body.dark .titles {
              color: white;
            }
            body.dark .toggle-btn {
              background-color: #577BDC;
            }
            body.dark ion-icon {
              color: white;
            }
            body.dark ion-buttons {
              color: white;
            }
            body.dark ion-content{
              --background: #121212;
            }
            body.dark .tooltheme{
              --background: #3A91D8;
            }
            body.white .tooltheme{
        --background: #3A91D8;
      }
            body.dark .tooltitle {
              color: white;
            }
            body.dark ion-list {
              background-color: #121212;
            }
            body.dark ion-item {
              --background: #121212;
            }
            body.dark .labelion {
              color: #FFFFFF;
            }
            body.dark .debelion {
              color: #dcd8d8;
            }
            body.dark ion-icon {
              color: #FFFFFF;
            }
            ion-icon {
              color: #FFFFFF;
            }
            body.dark ion-item::part(detail-icon) {
              color: #1c7ff1;
            }
            body.dark .titlepopuler {
              color: white;
            }

      body.dark .tombollike {
        color:#000;
      }

          body.dark .konten {
            background-color: #00500;
          }


        body.dark .konten {
          background-color: #2f2c2c;
        }

         body.dark .mr-3 {
           color: blue;
         }

         body.dark .trendtext {
            color: white;
          }

      body.dark .filsave {
         color: #6f5ffc;
       }

      /*end dark themes*/



               .trendtext {
                 color: white;
               }

              .mengikutext {
                 color: #404040;
               }

      .filsave {
         color: #6f5ffc;
       }

            ion-menu::part(container) {
              border-radius: 0 20px 20px 0;
              box-shadow: 4px 0px 16px;
            }

            ion-content {
              --background: white;
            }

            ion-list {
              background-color: white;
            }

            ion-item {
              background-color: white;
            }



            .tooltheme {
              background-color: white;
            }

            .tooltitle {
              color: white;
            }

            .titlepopuler{
              color: white;
            }


            .searching {
              width: 82%;

            }








            ion-item::part(detail-icon) {
              color: black;
              opacity: 1;
              font-size: 20px;
            }

            .konten {
              flex: 1;
              padding: 20px;
              overflow:auto;
              background-color: #dfdede;
            }




            .column {
              float: left;
              width: 110px;
              padding: 7px;
            }

            .joki-list {
              border-radius: 18px;
            }

            .teksinfo {
              color: white;
              font-family: Arial, Gagalin, sans-serif;
              font-weight: 100;
              font-size: 1.1rem;
            }


      /*media*/

            /* Untuk tampilan landscape atau tablet dengan lebar di antara 766px dan 767px */
            @media (min-width: 766px) and (max-width: 810px) {
              .AllList {
                  padding-left:102px;
                }
               .titlepopuler{
                 font-size:2.1rem;
               }
               .column{
                 width:170px;
               }
              #page-content-wrapper {
                 right: -6px;
              }
            }

            /* Untuk tampilan desktop dengan lebar di atau di atas 768px */
            @media (min-width: 768px) {
              .AllList {
                  padding-left:400px;
                }
               .titlepopuler{
                 font-size:2.1rem;
               }
               .column{
                 width:170px;
               }

              .navteng1 {
                margin-left: 280px; /* Menetapkan margin left pada layar > 767px */
              }

              .navteng2 {
                margin-left: 580px; /* Menetapkan margin left pada layar > 767px */
              }

              .searchbar-input-container.sc-ion-searchbar-md {
                width: 41%;
              }






            }


            .row::after {
              content: "";
              clear: both;
              display: table;
            }





            /*sidebar*/
      .sidebar {
        flex: 0 0 auto;
        width: 250px;
        height: 78%;
        background-color: #3A91D8;
        padding-top: 20px;
        color: white;
        position: fixed;
        border-right: 2px solid transparent;

        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        /* Efek setengah lingkaran pada ujung kanan */
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }

      .k0nten {
        flex: 0 0 auto;
        width: 239px;
        height: 8%;
        background-color: #3A91D8;
        padding-top: 20px;
        color: #f0eded;
        position: fixed;

        border-right: 2px solid transparent;

        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        /* Efek setengah lingkaran pada ujung kanan */
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }

            .sidebar {
              border-right: 1px solid #2d2400; /* Warna border default */
            }


            .sidebar p {
              text-align: left;
              padding-left: 18px;
              margin: 0;
              transition: transform 0.5s;
            }

            .sidebar ul {
              list-style: none;
              padding: 0;
            }

            .sidebar li {
              padding: 8px;
              text-align: center;
            }

            .sidebar a {
              text-decoration: none;
              color: white;
              display: block;
              transition: color 0.5s;
            }

            .sidebar a:hover {
              color: #ffcc00; /* Warna teks saat dihover */
            }

      .navteng1 {
        flex: 1;
        padding: 20px;
      }


      /*loader*/

      /* PRELOADER CSS */
      .page-loader{
        width: 100%;
        height: 100vh;
        position: absolute;
        background: #272727;
        z-index: 1000;
        .txt{
          color: #666;
          text-align: center;
          top: 40%;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          font-weight: bold;
          line-height: 1.5;
        }
      }

      /* SPINNER ANIMATION */
      .spinner {
        position: relative;
        top: 35%;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        background-color: #3A91D8;

        border-radius: 100%;  
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
      }

      @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
          -webkit-transform: scale(1.0);
          opacity: 0;
        }
      }

      @keyframes sk-scaleout {
        0% { 
          -webkit-transform: scale(0);
          transform: scale(0);
        } 100% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
          opacity: 0;
        }
      }



      .mr-3 {
        color: blue;
      }

      .iconnavfo {
        font-size: 25px;
        color: #2d2929;
      }


      .username {
        color:#65666E;
      }

      .scrolller {
        flex: 1;
        padding: 20px;
        overflow: auto;
      }





      .mySlides {display:none;}

      .btn-quick-links {
          background-color: #fff;
          color: #6c757d;
          flex: 1;
          text-align: center;
      }

      .btn-quick-links i {
          font-size: 1.5rem;
          vertical-align: bottom;
      }

      .ql-active {
          background-color: #007bff;
          color: #fff;
      }


      .tombollike{
        color: #000;
      }
      

    </style>
  </head>
  <body >

    <!-- loading -->
    <div class="page-loader">
      <div class="spinner"></div>
      <div class="txt">Memuat..<br>Tunggu Sebentar</div>
    </div>
    <!-- Dashboard samping -->
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar class="tooltheme">
          <ion-title><center  class="tooltitle">Dashboard</center></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">



        <ion-list inset="true">

          <ion-item href="/games" button detail="true">
            <ion-label>
              <h2 class="labelion"><b>Profile</b></h2>
              <p class="debelion">Lihat Profile Mu</p>
            </ion-label>
          </ion-item>
          <ion-item button detail="true">
            <ion-label>
              <h2 class="labelion"><b>Bookmark</b></h2>
              <p class="debelion">Lihat halaman yg<br> telah di simpan </p>
            </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-label>
              <h2 class="labelion"><b>Library</b></h2>
              <p class="debelion">Lagi Nyari Buku?</p>
            </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-label>
              <h2 class="labelion"><b>Akun</b></h2>
              <p class="debelion">Pengaturan Lanjutan Akun</p>
            </ion-label>
          </ion-item>



          <ion-item button detail="true">
            <ion-label>
              <h2 class="labelion"><b>Masukan/Laporan</b></h2>
              <p class="debelion">menemukan bug?<br>laporkan disini</p>
            </ion-label>
          </ion-item>


        </ion-list>
<br><br><br><br><br>
        <ion-list inset="true">
          <ion-item>
            <ion-toggle id="themeToggle" justify="space-between" class="labelion">Dark Mode</ion-toggle>
          </ion-item>
          </ion-list>
      </ion-content>
    </ion-menu>
    <!-- Header atas -->
    <div class="header" id="main-content">

      <ion-buttons slot="end">


     
        <img src="<%= pp %>" class="menu-user-img ml-1" alt="Menu Image">
      

        <ion-searchbar search-icon="search-circle" placeholder="Search Topics" class="searching"></ion-searchbar>
        </ion-buttons>






      <ion-buttons slot="end">


        <ion-button color="dark">
        <ion-icon slot="icon-only" ios="create" md="create"></ion-icon>
        </ion-button>

        <ion-button color="dark">
          <ion-icon slot="icon-only" ios="chatbubbles" md="chatbubbles"></ion-icon>
          </ion-button>

          <ion-icon slot="icon-only" ios="notifications" md="notifications"></ion-icon>
        </ion-button>

        <ion-button slot="start" color="white" style="color: white;">
           <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </div>

    <div class="konten scrolller" id="main-content">
   

      <div class="col-md-6 second-section scrolller" id="page-content-wrapper">
        <div class="mb-3">
            <div class="btn-group d-flex">

              
                <a href="/" class="btn btn-quick-links mr-3 ql-active">
                  <ion-icon name="flame" class="mr-2"></ion-icon>
                    <span class="fs-8 trendtext">TRENDING</span>
                </a>
              
                <a href="/followed" class="btn btn-quick-links mr-3">
                    <ion-icon name="people-outline" class="mr-3"></ion-icon>
                  
                    <span class="fs-8 mengikutext">MENGIKUTI</span>
                </a>

                  
                  
                <a href="/friends" class="btn btn-quick-links">
                    <ion-icon name="person-outline"class="mr-3"></ion-icon>
                    <span class="fs-8">TEMAN</span>
                </a>

              
            </div>
        </div>





        <ul class="list-unstyled" style="margin-bottom: 0;">
            <li class="media post-form w-shadow">
                <div class="media-body">

      <form id="post-form" method="POST" action="/create">                 
                    <div class="form-group post-input">
                        <textarea class="form-control" id="postForm" rows="2" placeholder="What's on your mind, <%= username %>?" name="topic-name" required></textarea>
                    </div>
                    <div class="row post-form-group">
                        <div class="col-md-9">
                          <!-- foto -->
                            <button type="button" class="btn btn-link post-form-btn btn-sm">
              
                              <ion-icon name="duplicate" class="iconnavfo filsave"></ion-icon>
                              
                            </button>
                          <!-- Emoji -->
                            <button type="button" class="btn btn-link post-form-btn btn-sm">
                              <ion-icon name="happy"  class="iconnavfo filsave"></ion-icon>
                            </button>
                          <!-- pooling -->
                            <button type="button" class="btn btn-link post-form-btn btn-sm">
                <ion-icon name="list"  class="iconnavfo filsave"></ion-icon> 
                            </button>
                          <!-- tag -->
                          <button type="button" class="btn btn-link post-form-btn btn-sm">
                            <ion-icon name="at-circle"  class="iconnavfo filsave"></ion-icon> 
                          </button>
                        </div>
                        <div class="col-md-3 text-right">

      <span id="msg"></span>
                            <button type="submit" class="btn btn-primary btn-sm">Publish</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </form>





        <!-- Posts -->
        <div class="posts-section mb-5">


            <div class="post border-bottom p-3 bg-white w-shadow">
                <div class="media text-muted pt-3">
                    <img src="<%= pp %>" alt="Online user" class="mr-3 post-user-image">
                    <div class="media-body pb-3 mb-0 small lh-125">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <a href="#" class="text-gray-dark username post-user-name">Arthur Minasyan</a>
                            <div class="dropdown">
                                <a href="#" class="post-more-settings" role="button" data-toggle="dropdown" id="postOptions" aria-haspopup="true" aria-expanded="false">
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left post-dropdown-menu">
                                    <a href="#" class="dropdown-item" aria-describedby="savePost">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <i class='bx bx-bookmark-plus post-option-icon'></i>
                                            </div>
                                            <div class="col-md-10">
                                                <span class="fs-9">Save post</span>
                                                <small id="savePost" class="form-text text-muted">Add this to your saved items</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item" aria-describedby="hidePost">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <i class='bx bx-hide post-option-icon'></i>
                                            </div>
                                            <div class="col-md-10">
                                                <span class="fs-9">Hide post</span>
                                                <small id="hidePost" class="form-text text-muted">See fewer posts like this</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item" aria-describedby="snoozePost">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <i class='bx bx-time post-option-icon'></i>
                                            </div>
                                            <div class="col-md-10">
                                                <span class="fs-9">Snooze Arthur for 30 days</span>
                                                <small id="snoozePost" class="form-text text-muted">Temporarily stop seeing posts</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item" aria-describedby="reportPost">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <i class='bx bx-block post-option-icon'></i>
                                            </div>
                                            <div class="col-md-10">
                                                <span class="fs-9">Report</span>
                                                <small id="reportPost" class="form-text text-muted">I'm concerned about this post</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span class="d-block">3 hours ago <i class='bx bx-globe ml-3'></i></span>
                    </div>
                </div>
                <div class="mt-3">
                    <p>Hello World</p>
                </div>
              
                <div class="mb-3"> 
                    <!-- Reactions -->
                    <div class="argon-reaction">
                        <span class="like-btn">
                            <a href="#" class="post-card-buttons" id="reactions"><ion-icon class='bx bxs-like mr-2 tombollike' name="thumbs-up-sharp"></ion-icon> 0</a>
                            <ul class="reactions-box dropdown-shadow">
                                <li class="reaction reaction-like" data-reaction="Like"></li>
                                <li class="reaction reaction-love" data-reaction="Love"></li>
                                <li class="reaction reaction-haha" data-reaction="HaHa"></li>
                                <li class="reaction reaction-wow" data-reaction="Wow"></li>
                                <li class="reaction reaction-sad" data-reaction="Sad"></li>
                                <li class="reaction reaction-angry" data-reaction="Angry"></li>
                            </ul>
                        </span>
                    </div>
                    <a href="javascript:void(0)" class="post-card-buttons" id="show-comments"><ion-icon class='bx bxs-like mr-2 tombollike' name="chatbubbles-sharp"></ion-icon> 0</a>
                    <div class="dropdown dropup share-dropup">
                        <a href="#" class="post-card-buttons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <ion-icon class='bx bx-share-alt mr-2 tombollike' name="share-social-sharp"></ion-icon>Share
                        </a>
                        <div class="dropdown-menu post-dropdown-menu">
                            <a href="#" class="dropdown-item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <i class='bx bx-share-alt'></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>Share Now (Public)</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <i class='bx bx-share-alt'></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>Share...</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <i class='bx bx-message'></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>Send as Message</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-top pt-3 hide-comments" style="display: none;">
                    <div class="row bootstrap snippets">
                        <div class="col-md-12">
                            <div class="comment-wrapper">
                                <div class="panel panel-info">
                                    <div class="panel-body">
                                        <ul class="media-list comments-list">
                                            <li class="media comment-form">
                                                <a href="#" class="pull-left">
                                                    <img src="assets/images/users/user-4.jpg" alt="" class="img-circle">
                                                </a>
                                                <div class="media-body">
                                                    <form action="" method="" role="form">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control comment-input" placeholder="Write a comment...">

                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn comment-form-btn" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class='bx bxs-smiley-happy'></i></button>
                                                                        <button type="button" class="btn comment-form-btn comment-form-btn" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class='bx bx-camera'></i></button>
                                                                        <button type="button" class="btn comment-form-btn comment-form-btn" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class='bx bx-microphone'></i></button>
                                                                        <button type="button" class="btn comment-form-btn" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><i class='bx bx-file-blank'></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="assets/images/users/user-2.jpg" alt="" class="img-circle">
                                                </a>
                                                <div class="media-body">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <strong class="text-gray-dark"><a href="#" class="fs-8">Karen Minas</a></strong>
                                                        <a href="#"><i class='bx bx-dots-horizontal-rounded'></i></a>
                                                    </div>
                                                    <span class="d-block comment-created-time">30 min ago</span>
                                                    <p class="fs-8 pt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                                    </p>
                                                    <div class="commentLR">
                                                        <button type="button" class="btn btn-link fs-8">Like</button>
                                                        <button type="button" class="btn btn-link fs-8">Reply</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                                </a>
                                                <div class="media-body">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <strong class="text-gray-dark"><a href="#" class="fs-8">Lia Earnest</a></strong>
                                                        <a href="#"><i class='bx bx-dots-horizontal-rounded'></i></a>
                                                    </div>
                                                    <span class="d-block comment-created-time">2 hours ago</span>
                                                    <p class="fs-8 pt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                                    </p>
                                                    <div class="commentLR">
                                                        <button type="button" class="btn btn-link fs-8">Like</button>
                                                        <button type="button" class="btn btn-link fs-8">Reply</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                                </a>
                                                <div class="media-body">
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <strong class="text-gray-dark"><a href="#" class="fs-8">Rusty Mickelsen</a></strong>
                                                        <a href="#"><i class='bx bx-dots-horizontal-rounded'></i></a>
                                                    </div>
                                                    <span class="d-block comment-created-time">17 hours ago</span>
                                                    <p class="fs-8 pt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                                    </p>
                                                    <div class="commentLR">
                                                        <button type="button" class="btn btn-link fs-8">Like</button>
                                                        <button type="button" class="btn btn-link fs-8">Reply</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <div class="media-body">
                                                    <div class="comment-see-more text-center">
                                                        <button type="button" class="btn btn-link fs-8">See More</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </div>
      </div>
<br>

      </div>
    
  </body>
  <script src="assets/js/ui.js"></script>
<script>
  $(window).on('load', function () {
    setTimeout(function () {
      // Pastikan selector untuk loader sesuai
      $('.page-loader').fadeOut('slow');
    }, 3000); // 3000 milliseconds = 3 seconds
  });
</script>

  <script nomodule="" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css">
  <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>

</html>
