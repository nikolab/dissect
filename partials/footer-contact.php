</main>
<footer class="main-footer footer-contact">
	<div class="wrapper-full">
		<div class="footer-top">
            <div class="social-connect-holder">
                <h3>Follow us</h3>
                <ul class="social-connect">
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Behance</a></li>
                    <li><a href="">Facebook</a></li>
                </ul>
            </div>
            <div class="office-time">
			    <h3 class="office-time-title">Office time</h3>
                <?php
                    $date = new DateTime("now", new DateTimeZone('Europe/Belgrade') );?>
			    <h2 class="office-time-display"><?php echo $date->format('H:i'); ?></h2>
            </div>
		</div>
		<div class="footer-bottom">
			<a href="mailto:letstalk@dissect.com" class="footer-email">letstalk@dissect.com</a>
			<ul class="social-links">
				<li><a href="">LinkedIn</a></li>
				<li><a href="">Medium</a></li>
				<li><a href="">Behance</a></li>
			</ul>
			<p class="copyright">© dissect. All rights reserved</p>
		</div>
	</div>
</footer>
</body>
</html>