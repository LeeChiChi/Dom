window.onload = function() {
    let alertInfo = Dom.createAlertInfo();
    alertInfo.id = 'alert';
    let alert = Dom.createAlert(alertInfo);

    let badgeInfo = Dom.createBadgeInfo();
    let badge = Dom.createBadge(badgeInfo);
    alert.append(badge);
    $('#edit-area').append(alert);
    
    let breadcrumbInfo = Dom.createBreadcrumbInfo();
    let breadcrumb = Dom.createBreadcrumb(breadcrumbInfo);
    $('#edit-area').append(breadcrumb);
};