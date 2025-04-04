/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
/*global $, document, window, setTimeout, navigator, console, location*/
/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {

    'use strict';

    var usernameError = true,
        emailError = true,
        passwordError = true,
        passConfirm = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('name')) {
            const nameValue = $(this).val();
            const specialCharPattern = /[^a-zA-Z0-9\s]/; // Biểu thức kiểm tra ký tự đặc biệt
        
            if (nameValue.length === 0) {
                $(this).siblings('span.error').text('Vui lòng nhập tên đầy đủ của bạn').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if (specialCharPattern.test(nameValue)) {
                $(this).siblings('span.error').text('Tên không được chứa ký tự đặc biệt').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if (nameValue.length > 1 && nameValue.length <= 6) {
                $(this).siblings('span.error').text('Vui lòng nhập ít nhất 6 ký tự').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email')) {
            const emailValue = $(this).val();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format

            if (emailValue.length === 0) {
                $(this).siblings('span.error')
                    .text('Vui lòng nhập địa chỉ email của bạn')
                    .fadeIn()
                    .parent('.form-group').addClass('hasError');
                emailError = true;
            } else if (!emailPattern.test(emailValue)) {
                $(this).siblings('span.error')
                    .text('email không hợp lệ')
                    .fadeIn()
                    .parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('span.error')
                    .text('')
                    .fadeOut()
                    .parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 6) {
                $(this).siblings('span.error').text('Vui lòng nhập ít nhất 6 ký tự').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Mật khẩu không khớp').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        console.log($(this))
        $(this).addClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .pass, .passConfirm').blur();
        } else {
           // $('.signup, .login').addClass('switched');

            // setTimeout(function () { $('.signup, .login').hide(); }, 700);
            // setTimeout(function () { $('.brand').addClass('active'); }, 300);
            // setTimeout(function () { $('.heading').addClass('active'); }, 600);
            // setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            // setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            // setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        window.location.reload(true);
    });


});

