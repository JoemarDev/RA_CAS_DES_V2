// Accout Scripts
let isLogin = true;



$('.memo-table td:odd').click(function () {
    $(this).parent().next().toggle();
});

const PagePopupHandler = () => $('.page-body-pop-up').toggle();

const PageChildHandler = (elem, type) => {
    $('.page-tab-menu-child').removeClass('bg-primary-only')
    $(elem).addClass('bg-primary-only');

    if (type == 1) {
        $('.popup-child-content-1').show();
        $('.popup-child-content-2').hide();
    } if (type ==
        2) {
        $('.popup-child-content-1').hide();
        $('.popup-child-content-2').show();
    }
}




$('.brand').click(() => {
    window.location.href = "index.html"
});


const ToogleGameTabMain = (val) => {
    $('.links').removeClass('active')
    $('.game-container').hide();

    if (val === 1) {
        $(".live-box").show()
        $(".live").addClass('active')
        $('html, body').animate({
            scrollTop: $(".live").offset().top
        }, 600);

    }
    if (val === 2) {
        $(".slot-box").show()
        $(".slot").addClass('active')
        $('html, body').animate({
            scrollTop: $(".slot").offset().top
        }, 600);
    }
    if (val === 3) {
        $(".sports-box").show()
        $(".sports").addClass('active')
        $('html, body').animate({
            scrollTop: $(".sports").offset().top
        }, 600);
    }
    if (val === 4) {
        $(".arcade-box").show()
        $(".arcade").addClass('active')
        $('html, body').animate({
            scrollTop: $(".arcade").offset().top
        }, 600);
    }
}

const ToogleGameTab = (val) => {
    $('.links').removeClass('active')
    // $('.game-container').hide();

    if (val === 1) {
        window.location.href = "casino.html"
    }

    if (val === 2) {
        window.location.href = "slot.html"
    }

    if (val === 3) {
        window.location.href = "betting-history.html"
    }
    if (val === 4) {
        window.location.href = "qna.html"
    }
}
const OpenLoginDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.LOGIN_WRAPPER').show();
}

const CloseLoginDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.LOGIN_WRAPPER').hide();
}

const OpenRegisterDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.REGISTER_WRAPPER').show();
}

const CloseRegisterDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.REGISTER_WRAPPER').hide();
}

const ToogleTransactionLists = (val) => {
    $('.transaction-title').removeClass('active')
    $('.transaction-list').hide();

    if (val === 1) {
        $(".deposit-lists").show()
        $(".dep").addClass('active')
    }
    if (val === 2) {
        $(".withdrawal-lists").show()
        $(".wid").addClass('active')
    }

}

let DefaultValue = 5_026_992_350;
setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 2000);
    $('#odometer').html(DefaultValue)
}, 4000)




const LoginAccount = () => {
    isLogin = true;
    $('.UserIsMember').show()
    $('.UserIsGuess').hide()
    CloseRegisterDialog()
    CloseLoginDialog()

}


const LougoutAccount = () => {
    $('.UserIsMember').hide()
    $('.UserIsGuess').show()
    isLogin = false;
}

const InitLoginDetails = () => {
    if (isLogin) {
        LoginAccount();
    } else {
        LougoutAccount();
    }
}

InitLoginDetails()


const OpenTransferDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.TRANSFER_MONEY_DIALOG').toggle()
}


const OpenPageDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.PAGE_DIALOG_CONTENT').show()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}

const ClosePageDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.PAGE_DIALOG_CONTENT').hide()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}


const OpenAccountDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.ACCOUNT_DIALOG_CONTENT').show()
    $('.PAGE_DIALOG_CONTENT').hide()
}

const CloseAccountDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.PAGE_DIALOG_CONTENT').hide()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}

const ResetTabs = () => {
    $('.tab-content-child').hide()
    $('.dialog-tabs').removeClass('tab-active')
}

const OpenAnouncementTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.AN_tab').addClass('tab-active')
    $('.announcement_dialog').show()
}

const OpenFAQTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.FQ_tab').addClass('tab-active')
    $('.faq_dialog').show()
}

const OpenEventTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.EV_tab').addClass('tab-active')
    $('.event_dialog').show()
}

const OpenInquiryTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.INQ_tab').addClass('tab-active')
    $('.inquiry_dialog').show()
}


const OpenNoteTab = () => {
    window.location.href = "memo.html";
}

const OpenPartnerTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.PI_TAB').addClass('tab-active')
    $('.partnership_dialog').show()
}


const OpenMoneyMoveTab = () => {
    window.location.href = "announcement.html"
}

const OpenDepositTab = () => {
    window.location.href = "deposit.html"
}

const OpenWithdrawDialog = () => {
    window.location.href = "withdrawal.html"
}


const OpenBonusDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.BON_tab').addClass('tab-active')
    $('.bonus_dialog').show()
}

const OpenFriendDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.FR_TAB').addClass('tab-active')
    $('.friend_dialog').show()
}

const OpenCouponDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.COU_TAB').addClass('tab-active')
    $('.coupon_dialog').show()
}


const OpenHistoryDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.HIS_TAB').addClass('tab-active')
    $('.history_dialog').show()
}

const OpenPasswordDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.PASS_TAB').addClass('tab-active')
    $('.password_dialog').show()
}



const OpenAnouncementContent = () => $('.announcement_content').toggle()

const OpenEventContent = () => $('.event_content').toggle()


const WriteInquiry = () => {
    $('.write_inquiry').show();
    $('.inquiry_lists').hide()
}

const ListInquiry = () => {
    $('.write_inquiry').hide();
    $('.inquiry_lists').show()
}

const GoToTransferMoney = () => window.location.href = "transfer-money.html"