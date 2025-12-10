var posts = [
    { id: 1, author: "alice", content: "This is a user post awaiting review.", status: "pending" },
    { id: 2, author: "bob", content: "Another post that might be spam.", status: "pending" },
    { id: 3, author: "carol", content: "A harmless post already approved.", status: "approved" }
];

function renderPosts() {
    var container = document.getElementById("postsContainer");
    container.innerHTML = "";
    posts.forEach(function(p) {
        var div = document.createElement("div");
        div.className = "post";
        div.id = "post-" + p.id;
        div.innerHTML =
            "<div class='meta'>#" + p.id + " by " + p.author +
            "<span class='status'>[" + p.status + "]</span></div>" +
            "<div class='content'>" + escapeHtml(p.content) + "</div>" +
            "<div class='actions'></div>";
        container.appendChild(div);

        var actions = div.querySelector(".actions");
        if (p.status === "pending") {
            var approveBtn = document.createElement("button");
            approveBtn.textContent = "Approve";
            approveBtn.onclick = function(){ updateStatus(p.id, "approved"); };
            actions.appendChild(approveBtn);

            var rejectBtn = document.createElement("button");
            rejectBtn.textContent = "Reject";
            rejectBtn.onclick = function(){ updateStatus(p.id, "rejected"); };
            actions.appendChild(rejectBtn);
        }

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function(){ deletePost(p.id); };
        actions.appendChild(deleteBtn);
    });
}

function updateStatus(id, newStatus) {
    var p = posts.find(function(x){ return x.id === id; });
    if (!p) return;
    if (!confirm("Set post #" + id + " to '" + newStatus + "'?")) return;
    p.status = newStatus;
    var postEl = document.getElementById("post-" + id);
    if (postEl) {
        var statusSpan = postEl.querySelector(".status");
        if (statusSpan) statusSpan.textContent = "[" + newStatus + "]";
    }
}

function deletePost(id) {
    if (!confirm("Delete post #" + id + "? This cannot be undone in this demo.")) return;
    posts = posts.filter(function(x){ return x.id !== id; });
    var postEl = document.getElementById("post-" + id);
    if (postEl && postEl.parentNode) postEl.parentNode.removeChild(postEl);
}


function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function(m){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]; });
}

document.addEventListener("DOMContentLoaded", renderPosts);