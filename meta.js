module.exports = {
    "prompts": {
        "name": {
            "type": "input",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "input",
            "required": false,
            "message": "Project description",
            "default": "A Mtime web project"
        },
        "author": {
            "type": "input",
            "message": "Author"
        },
        "vuex": {
            "type": "confirm",
            "message": "Install vuex?"
        }
    },
    "completeMessage": "开始开发"
};