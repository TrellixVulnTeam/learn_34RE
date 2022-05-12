import Column from "./Column.js"

export default class Kanban {
    constructor(root) {
        this.root = root        

        Kanban.columns().forEach(column => {
            // TODO: create an instance column class
            const columnView = new Column(column.id, column.title)

            this.root.appendChild(columnView.elements.root)
        })
    }

    static columns() {
        return [
            {
                id: 1,
                title: "Not started"
            },
            {
                id: 2,
                title: "In Progress"
            },
            {
                id: 3,
                title: "Completed"
            }
        ]
    }
}