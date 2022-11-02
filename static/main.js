

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
            ` <div class="card-body">
            <blockquote class="blockquote mb-0">
              <div class="btn">
                <footer disabled id="name" class="text1">${names}</footer>
                <button onclick="delete_comment(${num})" class="button2">지우기</button>
              </div>
                <footer disabled class="blockquote-footer" id="comment">${comment}</footer>
            </blockquote>
        </div>
        `
                $("#comment-list").append(temp_html);
            }
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