$(document).ready(function () {
    show_comment()
});

// document.getElementById("button").addEventListener("click", save_comment);

function save_comment() {
    let name = $("#name").val();
    let comment = $("#comment").val();

    $.ajax({
        type: 'POST',
        url: '/miniproject',
        data: {'comment_give': comment, 'name_give': name},
        success: function (response) {
            alert(response['msg'])

            window.location.reload()
        }
    })
}

function show_comment() {
    $.ajax({
        type: "GET",
        url: "/miniproject",
        data: {},
        success: function (response) {
            let rows = response['comments']
            for (let i = 0; i < rows.length; i++) {
                let comment = rows[i]['comment']
                let names = rows[i]['names']

                let temp_html = `
                <div class="card">
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p class="text1">${names}</p>
                        <footer class="blockquote-footer">${comment}</footer>
                    </blockquote>
                </div>
            </div>
           `
                $("#comment-list").append(temp_html);
            }
        }
    });
}