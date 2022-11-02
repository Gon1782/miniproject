

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
                let num = rows[i]['num']

                let temp_html =
            ` <div class="card">
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p class="text1">${names}</p>
                        <footer class="blockquote-footer">${comment}</footer>
                        <button onclick="delete_comment(${num})" type="button">삭제</button>
                        <button onclick="update_comment(${num})" type="button">업데이트</button>
                    </blockquote>
                </div>
            </div>`
                $("#comment-list").append(temp_html);
            }
        }
    });
}

function update_comment(num) {
    let comment = $("#comment").val()
    $.ajax({

                type: "POST",
                url: "/miniproject/update",
                data: {'comment_give': comment, 'num_give': num },
                success: function (response) {
                    alert(response["msg"])
                      window.location.reload()
                }
            });
}

function delete_comment(num) {
            $.ajax({
                type: "POST",
                url: "/miniproject/delete",
                data: {'num_give': num},
                success: function (response) {
                    alert(response["msg"])
                      window.location.reload()
                }
            });
        }