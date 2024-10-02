document.getElementById("navbar").innerHTML = `
          <div class="flex items-center justify-center p-2 bg-[#1f232f] text-center text-white font-medium">5/5 Star Rating
        Based on 888 Client
        Reviews</div>

    <div class="flex px-5 my-2 lg:items-center lg:flex-row gap-5 flex-col lg:justify-between max-w-7xl mx-auto w-full">
        <a href="/index.html" class="bg-[#1f232f] w-[7rem] h-[7rem] flex items-center justify-center rounded-full ">
            <img src="/Docs/Assets/logo.png" class="h-20" alt="">
        </a>

        <div class="flex lg:items-center gap-5 md:flex-row flex-col">

            <div class="flex items-center gap-3 max-w-[17rem]">
                <i class="fa-solid fa-phone text-2xl text-[#1f232f]"></i>
                <div class="text-sm">
                    <p class="leading-tight text-[#1f232fe7]">COMPLIANCES: ABN: 53 626 850 931 | M/L: 000103958</p>
                    <p class="font-medium">Call Now: 1300 240 620</p>
                </div>
            </div>
            <div class="flex items-center gap-3 max-w-[17rem]">
                <i class="fa-solid fa-location-dot text-2xl text-[#1f232f]"></i>
                <div class="text-sm">
                    <p class="leading-tight text-[#1f232fe7]">Location:38 Lisbon Street Fairfield East NSW 2165</p>
                    <p class="font-medium">Call Now: 1300 240 620</p>
                </div>
            </div>

        </div>
    </div>

    <div id="resNav" style="width: 0%;" class="overflow-hidden transition-all duration-500 h-screen bg-[#1f232f] flex items-center justify-center fixed top-0 left-0 z-50">
        <i class="fa-solid fa-x text-white text-xl absolute top-8 right-8 cursor-pointer " id="closeNav"></i>
        <ul class="flex flex-col  gap-8 text-white font-medium">
            <li><a href="/index.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Home</a></li>
            <li><a href="/about.html" class="navUnderLine hover:text-[#5e78c7] transition-all">About</a></li>
            <li id="dropDownres" class="relative  py-2">
                <div class="navUnderLine hover:text-[#5e78c7] transition-all flex items-center gap-2">Services
                    <i class="fa-solid fa-sort-down mb-1"></i>
                </div>
                <ul id="dropDownShowRes"
                    class=" fadeIn hidden z-20 bg-white text-[#1f232f] w-[20rem] overflow-hidden border top-10 mt-8 rounded-lg">
                    <a href="/services/Alarm-monitoring.html" class="py-2 w-full">
                        <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">Alarm Monitoring</li>
                    </a>
                    <a href="#" class="py-2 w-full">
                        <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                    </a>
                    <a href="#3" class="py-2 w-full">
                        <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                    </a>
                    <a href="#4" class="py-2 w-full">
                        <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                    </a>
                </ul>
            </li>
            <li><a href="/blog.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Blog</a></li>
            <li><a href="/contact.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Contact</a></li>
        </ul>
    </div>
    <div class="bg-[#1f232f] px-5">
        <nav class="max-w-7xl w-full h-20 mx-auto flex items-center justify-between ">

            <ul class="lg:flex hidden items-center gap-8 text-white font-medium">
                <li><a href="/index.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Home</a></li>
                <li><a href="/about.html" class="navUnderLine hover:text-[#5e78c7] transition-all">About</a></li>
                <li class="relative dropDown py-2"><a href=""
                        class="navUnderLine hover:text-[#5e78c7] transition-all flex items-center gap-2">Services
                        <i class="fa-solid fa-sort-down mb-1"></i>
                    </a>
                    <ul
                        class="dropDownShow absolute z-20 bg-white text-[#1f232f] w-[10rem] overflow-hidden border top-10 fastFadeIn rounded-lg">
                        <a href="/services/Alarm-monitoring.html" class="py-2 w-full">
                            <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">Alarm Monitoring</li>

                        </a>
                        <a href="" class="py-2 w-full">
                            <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                        </a>
                        <a href="" class="py-2 w-full">
                            <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                        </a>
                        <a href="" class="py-2 w-full">
                            <li class="hover:bg-[#1f232f] p-3 hover:text-white transition-all w-full">First</li>
                        </a>
                    </ul>
                </li>
                <li><a href="/blog.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Blog</a></li>
                <li><a href="/contact.html" class="navUnderLine hover:text-[#5e78c7] transition-all">Contact</a></li>
            </ul>

            <div class="flex items-center justify-center gap-5">
                <i
                    class="fa-brands fa-facebook text-white text-3xl transition-all hover:scale-105 hover:text-[#5e78c7] duration-500 cursor-pointer"></i>
                <i
                    class="fa-brands fa-instagram text-white text-3xl transition-all hover:scale-105 hover:text-[#5e78c7] duration-500 cursor-pointer"></i>
                <i
                    class="fa-brands fa-linkedin text-white text-3xl transition-all hover:scale-105 hover:text-[#5e78c7] duration-500 cursor-pointer"></i>
            </div>

            <i class="fa-solid fa-bars text-white text-2xl lg:hidden" id="openNav"></i>
        </nav>
    </div>
      `;

// Event Listeners for dropdown and responsive navbar
const dropDownShowRes = document.getElementById("dropDownShowRes");
const dropDownres = document.getElementById("dropDownres");

dropDownres.addEventListener('click', () => {
    dropDownShowRes.classList.toggle("hidden");
});

const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const resNav = document.getElementById("resNav");

openNav.addEventListener('click', () => {
    resNav.style.width = "100%";
});

closeNav.addEventListener('click', () => {
    resNav.style.width = "0%";
});