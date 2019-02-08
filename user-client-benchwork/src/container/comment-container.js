import React, { Component } from 'react';
import APIService from "service/api-service";
import InputComponentForm from "component/inputform-component";
import TextareaComponent from "component/textarea-component";
import TableCommentComponent from "component/table-comment-component";

class CommentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            nameUser: '',
            textmsg: "",
            studentid: 0,

        }

        this.onChangeTextarea = this.onChangeTextarea.bind(this);
        this.sendComment = this.sendComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.getAllCommentByStudentId = this.getAllCommentByStudentId.bind(this);

    }
    getAllCommentByStudentId() {
        let propsId = this.props.idstudentcomment;
        this.setState({ studentid: propsId })
        APIService.post('getcommentbyidstudent', {
            idstudent: propsId
        }).then(response => {
            this.setState({ comments: response.data });
        })
    }

    componentDidMount() {
        this.getAllCommentByStudentId();
        this.setState({
            nameUser: this.props.username
        })

    }



    onChangeTextarea(event) {
        this.setState({
            textmsg: event.target.value
        })
    }

    addComment() {
        if (this.state.textmsg != '') {
            APIService.post('addcomment', {
                nameuser: this.state.nameUser,
                text: this.state.textmsg,
                studentid: this.state.studentid
            })
            this.getAllCommentByStudentId();
        }

    }
    sendComment(event) {
        event.preventDefault();
        {
            this.addComment();
        }

    }

    render() {

        return (

            <div>
                <div className="row justify-content-center">
                    <h1>Comments</h1>
                </div>
                <div className="container">

                    <form onSubmit={this.sendComment}>
                        <h2>{this.state.nameUser}</h2>


                        <TextareaComponent
                            id="message"
                            divclass="form-group"
                            inputClass="form-control"
                            rows="4"
                            value={this.state.textmsg}
                            onChange={this.onChangeTextarea}
                            errorMessage="Can't be empty"
                            placeholder="Your Comment"
                        />

                    </form>
                    <div className="d-flex container my-7">
                        <button type="button" className="btn btn-danger btn-lg col-sm-4" onClick={this.addComment}>Submit</button>
                        <button type="button" className="btn btn-danger btn-lg ml-auto col-sm-4" onClick={() => this.props.changePhase(0)}>Cancel</button>

                    </div>
                    <br/>
                    <TableCommentComponent
                        comments={this.state.comments}
                    />
                </div>
            </div>

        )
    }

}
export default CommentContainer