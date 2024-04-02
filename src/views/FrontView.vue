<template>
    <nav>
        <div style="display: flex; justify-content: center;">
            <RouterLink to="/"><img style="height:120px;" src="../assets/img/logo.png"/></RouterLink>
        </div>
        <div class="navbar-collapse" style="display: flex; justify-content: center; ">
            <div class="navbar-nav">
                <p>
                    <RouterLink to="/" style="color: gray;">首頁</RouterLink> / 
                    <RouterLink to="/products" style="color: gray;">預約行程</RouterLink> / 
                    <RouterLink to="/about" style="color: gray;">關於我們</RouterLink> 
                </p>
            </div>
        </div>    
    </nav>
    <hr>
    <RouterView></RouterView>
    <!-- <footer class="justify-content-end" id="footer" style="background-image: url(https://drive.google.com/uc?export=view&id=1lOoME3nwQuKri1ZWBbW2MG6zufiOxxrd) ;height: 37.5em;">
        <div class="row align-items-end" style=" height: 37.5em;
        background-position: center center; background-repeat: no-repeat;">
            <div class="col-md-4" style="position: relative; bottom: 0;"></div>
            <div class="col-md-4"><h3 class="text-center">森心靈自然體驗渡假村</h3></div>
            <div class="col-md-4"><p class="p-3" >南投縣森林鄉小溪鎮77號<br>電話:049-888666</p>
                <img class="w-100" src="../assets/img/footer.png" alt="" style="position: absolute; bottom: 10; left: 0; z-index: -1;">
            </div>
        </div> 
    </footer> -->
    <footer class="justify-content-end" id="footer" style="background-image: url(src/assets/img/footer.png) ;height: 37.5em;">
        <div class="row align-items-end" style=" height: 37.5em;
        background-position: center center; background-repeat: no-repeat;">
            <div class="col-md-4"></div>
            <div class="col-md-4"><h3 class="px-3 py-5 text-white">森心靈自然體驗渡假村</h3></div>
            <div class="col-md-4"><p class="px-3 py-3 text-white" >南投縣森林鄉小溪鎮77號<br>電話:049-888666</p>
            </div>
            <!-- <img class="w-100" src="../assets/img/footer.png" alt=""> -->
        </div> 
    </footer>
</template>