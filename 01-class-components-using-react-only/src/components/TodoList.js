import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const index = event.target.innerText.split(":")[0];
    if (event.type === "click") {
      try {
        //try-catch block is one way
        if (this.props.lists[index - 1] === undefined) {
          return;
        } // this is another way
        this.props.lists[index - 1][1] = !this.props.lists[index - 1][1] * 1;
        this.props.toggle(this.props.lists);
      } catch (e) {
        /* 
          why do we need this? If you click too fast, maybe the next click 
          happens during the last render process, and lists[index-1] is undefined
          will make the page crash. So I add a try-catch block.
         */
        console.log(e);
      }
    } else if (event.type === "contextmenu") {
      event.preventDefault();
      event.target.parentElement.className += " hide";
      //console.log(event.target.parentElement.className);
      setTimeout(() => {
        this.props.lists.splice(index - 1, 1);
        this.props.toggle(this.props.lists);
      }, 1000);
    }
  }

  render() {
    if (this.props.show === "All") {
      return (
        <div className="TodoList">
          {this.props.lists.map((ele, index) =>
            ele[1] > 0 ? (
              <div
                key={ele.toString() + Math.random()}
                onClick={this.handleClick}
                onContextMenu={this.handleClick}
                className="TodoList-div"
              >
                <h1>
                  {index + 1}: {ele[0]}
                </h1>
                <hr />
              </div>
            ) : (
              <div
                key={ele.toString() + Math.random()}
                onClick={this.handleClick}
                onContextMenu={this.handleClick}
                className="TodoList-div"
              >
                <h1 className="completed">
                  {index + 1}: {ele[0]}
                </h1>
                <hr />
              </div>
            )
          )}
        </div>
      );
    } else if (this.props.show === "Active") {
      return (
        <div className="TodoList">
          {this.props.lists.map((ele, index) => {
            return ele[1] > 0 ? (
              <div
                key={ele.toString() + Math.random()}
                onClick={this.handleClick}
                onContextMenu={this.handleClick}
                className="TodoList-div"
              >
                <h1>
                  {index + 1}: {ele[0]}
                </h1>
                <hr />
              </div>
            ) : null;
          })}
        </div>
      );
    } else {
      return (
        <div className="TodoList">
          {this.props.lists.map((ele, index) => {
            return ele[1] === 0 ? (
              <div
                key={ele.toString() + Math.random()}
                onClick={this.handleClick}
                onContextMenu={this.handleClick}
                className="TodoList-div"
              >
                <h1>
                  {index + 1}: {ele[0]}
                </h1>
                <hr />
              </div>
            ) : null;
          })}
        </div>
      );
    }
  }
}
