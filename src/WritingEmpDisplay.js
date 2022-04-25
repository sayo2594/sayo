import React, { Component } from "react";
import { WritingEmpEditor } from "./WritingEmpEditor";
import { WritingCourseTable } from "./WritingCourseTable";

export default class WritingEmpDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedWriting: null
        }
    }

    startEditing = (writing) => {
        this.setState({ showEditor: true, selectedWriting: writing })
    }

    createWriting = () => {
        this.setState({ showEditor: true, selectedWriting: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedWriting: null })
    }

    saveWriting = (writing) => {
        this.props.saveCallback(writing);
        this.setState({ showEditor: false, selectedWriting: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <WritingEmpEditor 
                key={ this.state.selected.id || -1 }
                writing={ this.state.selected } 
                saveCallback={ this.saveWriting }
                cancelCallback={ this.cancelEditing } />
        } else {
            console.log("-- in WritingEmpDisplay --");
            return <div className="m-2">
                <WritingCourseTable 
                    writing={ this.props.writing }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                  <div className="text-center">
                    <button className="btn btn-primary m-1" 
                        onClick={ this.createWriting }>
                        Create Writing Course
                    </button>
                </div>                      
            </div>
        }
    }
}
