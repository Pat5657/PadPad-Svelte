<script>
  import EditorJS from "@editorjs/editorjs";
  import Header from "@editorjs/header";
  import List from "@editorjs/list";
  import { auth, db } from "./firebase.js";

  const editor = new EditorJS({
    holder: "editorjs",
    data: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Editor.js",
            level: 2
          }
        }
      ]
    },
    tools: {
      header: {
        class: Header,
        inlineToolbar: true
      },

      list: {
        class: List,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+L"
      },

      checklist: {
        class: Checklist,
        inlineToolbar: true
      },

      linkTool: {
        class: LinkTool,
        inlineToolbar: true
      },

      image: {
        class: SimpleImage,
        inlineToolbar: ["link"]
      },

      marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M"
      }
    },
    onReady: function() {}
  });

  function saveEditor() {
    let userId = auth.currentUser.uid;
    editor
      .save()
      .then(outputData => {
        db.ref("/users/" + userId + "/pads/0/")
          .set(outputData)
          .then(function() {
            console.log("saved");
          });
      })
      .catch(error => {
        console.log("Saving failed: ", error);
      });
  }
</script>

<style>
  .editor-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .navbar {
    border-radius: 5px 5px 0px 0px;
  }
  #editorjs {
    background: #fff;
    height: auto;
    bottom: 0px;
    border-radius: 0px 0px 5px 5px;
  }
</style>

<div class="editor-container mt-4">
  <nav class="navbar navbar-light bg-light">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <h4>Tools</h4>
      </li>
    </ul>
    <button type="button" class="btn btn-outline-dark" on:click={saveEditor}>
      <span>Save</span>
      <i class="material-icons">save</i>
    </button>
  </nav>
  <!-- Load editor -->
  <div id="editorjs" />
</div>
