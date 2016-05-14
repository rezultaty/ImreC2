'use strict';
/* global initMeta, initCheckboxChanges, updateCommission, removeLoader */

var initFileRow = function (name, url) {
    var $table = $('#file-table').find('tbody');

    var $fileRow = $table.find('>:first-child').clone();
    var $cols = $fileRow.find('td');

    var $checkbox = $($cols.get(0)).find('input');
    $checkbox.attr('value', name);

    var $find = $($cols.get(3)).find('a');
    $find.attr('href', encodeURI(url));
    $find.html(name);

    $fileRow.removeClass('hidden');
    $table.append($fileRow);

    initMeta($fileRow);
    initCheckboxChanges($checkbox);
};

var initFileTable = function () {
    var storageId = $('#storage-id').html();
    var metaUrl = '/s/file/?s=' + encodeURIComponent(storageId);

    //noinspection NodeModulesDependencies
    $.get(metaUrl, function (data) {
        removeLoader();

        for (var i = 0; i < data.length; i++) {
            initFileRow(data[i].name, data[i].url);
        }

        updateCommission();

    }).fail(function () {
        alert('Something go wrong. Try reload page.');
    });
};


$(function () {
    initFileTable();
});