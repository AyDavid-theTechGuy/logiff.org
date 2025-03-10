const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container-fluid py-0">
		<a class="navbar-brand d-flex flex-row" href="https://logiff.org">
			<span><img src="./assets/img/logo.png"></span>
            <p class="m-auto ps-1">Lineage of Grace<br>Initiative For Family</p>
		</a>
		<button
			class="navbar-toggler navbar-icon"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
            <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-0 ms-auto">
				<li class="nav-item my-auto">
					<a class="nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nav-link" href="about-us.html">Who We Are</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nav-link" href="programmes.html">Programmes</a>
				</li>
                <li class="nav-item my-auto">
					<a class="nav-link" href="gallery.html">Gallery</a>
				</li>
                <li class="nav-item my-auto">
					<a class="nav-link" href="blog.html">Blog</a>
				</li>
				<li class="nav-item ct my-auto">
					<a class="nav-link ct btn" href="./contact-us.html">Contact Us</a>
				</li>
                <li class="nav-item ct my-auto">
					<a class="nav-link ct btn" href="./donate.html">
                        Donate
                        <i class="bi bi-heart-fill"></i>
                    </a>
				</li>
			</ul>
		</div>
	</div>
    `;


   
   
   
   
   