chrome.storage.local.get(function(items) {
    if (items !== undefined) {
        $.each(items, function (index, elem) {
            $('#memo_form')
                .append(
                $("<div/>", {
                    class: 'smoothswap_form smoothswap-panel flex shadow-box z-depth-2'
                    }).append(
                        $("<input>", {
                            type: 'text',
                            class: 'update_memo_button',
                            name: 'memo_content',
                            value: elem.content
                        })
                    )
                    .append(
                        $("<div/>", {
                            class: 'change_arrows down'
                        }).append(
                            $("<i/>", {
                                class: 'material-icons smoothswap-down',
                                text: 'arrow_downward'
                            })
                        )
                    )
                    .append(
                        $("<div/>", {
                            class: 'change_arrows up'
                        }).append(
                        $("<i/>", {
                                class: 'material-icons smoothswap-up',
                                text: 'arrow_upward'
                            })
                        )
                    )
                    .append(
                        $("<button/>", {
                            class: 'delete_forever delete_memo_button',
                            value: index
                        }).append(
                            $("<i/>", {
                                class: 'material-icons',
                                text: 'delete_forever'
                            })
                        )
                    )
                );
            }
        );
    }
});