var Dom = (function() {
    function createAlertInfo() {
        return {
            id: '',
            class: 'alert-primary',
            text: 'default'
        }
    }
    function createAlert(info) {
        let alert = $('<div>').addClass('alert').attr('role', 'alert');
        if(info.id) {
            alert.attr('id', info.id);
        }
        if(info.class) {
            alert.addClass(info.class);
        }
        if(info.text) {
            alert.text(info.text);
        }

        return alert;
    }
    function createBadgeInfo() {
        return {
            id: '',
            class: 'badge-primary',
            text: 'default'
        };
    }
    function createBadge(info) {
        let badge = $('<span>').addClass('badge');
        if(info.id) {
            badge.attr('id', info.id);
        }
        if(info.class) {
            badge.addClass(info.class);
        }
        if(info.text) {
            badge.text(info.text);
        }

        return badge;
    }
    function createBreadcrumbInfo() {
        return {
            id: '',
            items: []
        };
    }
    function createBreadcrumb(info) {
        let breadcrumb = $('<nav>').attr('aria-label', 'breadcrumb');
        let ol = $('<ol>').addClass('breadcrumb');
        if(info.id) {
            ol.attr('id', info.id);
        }
        if(info.items) {
            for(let item of info.items) {
                let li = $('<li>').addClass('breadcrumb-item');
                if(typeof item === 'object') {
                    li.append(item);
                }
                else {
                    li.text(item);
                }
                ol.append(li);
            }
        }
        breadcrumb.append(ol);
        return breadcrumb;
    }

    return {
        createAlertInfo: createAlertInfo,
        createAlert: createAlert,
        createBadgeInfo: createBadgeInfo,
        createBadge: createBadge,
        createBreadcrumbInfo: createBreadcrumbInfo,
        createBreadcrumb: createBreadcrumb
    };
}());