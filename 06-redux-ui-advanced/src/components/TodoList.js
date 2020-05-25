/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  toggle,
  deleteOneItem,
  liftOne,
  downOne,
  liftTop,
  downBottom,
  toSave,
} from "../redux/actions/todoListActions";
import { useAlert } from "react-alert";
import languageArray from "../languages";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import VerticalAlignTop from "@material-ui/icons/VerticalAlignTop";
import VerticalAlignBottom from "@material-ui/icons/VerticalAlignBottom";
import Edit from "@material-ui/icons/Edit";
import Modal from "react-modal";

Modal.setAppElement("#root");

let selectedIndex;
let selectedText;

function TodoList({
  show,
  lists,
  toggle,
  deleteOneItem,
  filterValue,
  language,
  liftOne,
  downOne,
  liftTop,
  downBottom,
  toSave,
}) {
  let newLists = [];
  const alert = useAlert();

  function handleClick(event) {
    const index = event.target.innerText.split(":")[0] - 1;
    if (event.type === "click") {
      try {
        toggle(index);
      } catch (e) {
        console.log(e);
      }
    } else if (event.type === "contextmenu") {
      event.preventDefault();
      if (filterValue !== "") {
        alert.show(languageArray[language].alertMessage, {
          timeout: 5000, // custom timeout just for this one alert
          type: "error",
        });
        return;
      }
      deleteOneItem(index);
      // event.target.parentElement.className += " hide";
      // setTimeout(() => {
      //   deleteOneItem(index);
      // }, 1000);
    }
  }

  function handleUpOne(event) {
    let index =
      event.target.getAttribute("data-index") !== null
        ? event.target.getAttribute("data-index")
        : event.target.parentElement.getAttribute("data-index");
    liftOne(index * 1);
  }

  function handleDownOne(event) {
    let index =
      event.target.getAttribute("data-index") !== null
        ? event.target.getAttribute("data-index")
        : event.target.parentElement.getAttribute("data-index");
    downOne(index * 1);
  }

  function handleTop(event) {
    let index =
      event.target.getAttribute("data-index") !== null
        ? event.target.getAttribute("data-index")
        : event.target.parentElement.getAttribute("data-index");
    liftTop(index);
  }

  function handleBottom(event) {
    let index =
      event.target.getAttribute("data-index") !== null
        ? event.target.getAttribute("data-index")
        : event.target.parentElement.getAttribute("data-index");
    downBottom(index);
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function handleEdit(event) {
    selectedIndex =
      event.target.getAttribute("data-index") !== null
        ? event.target.getAttribute("data-index")
        : event.target.parentElement.getAttribute("data-index");
    selectedText = lists[selectedIndex][0];
    setIsOpen(true);
  }

  function handleSave(event) {
    event.preventDefault();
    const text = event.target["message"].value;
    console.log(text);
    console.log(selectedIndex);
    toSave(selectedIndex, text);
    closeModal();
  }

  if (filterValue !== "") {
    newLists = lists.map((ele) => {
      if (ele[0].indexOf(filterValue) !== -1) {
        return [...ele];
      } else {
        return [];
      }
    });
  } else {
    newLists = lists.map((ele) => [...ele]);
  }

  if (show === 0) {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] > 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onContextMenu={handleClick}
            >
              <span onClick={handleClick}>
                {index + 1}: {ele[0]}
              </span>
              <div style={{ float: "right" }} data-index={index}>
                <ArrowUpward onClick={handleUpOne} data-index={index} />
                <ArrowDownward onClick={handleDownOne} data-index={index} />
                <VerticalAlignTop onClick={handleTop} data-index={index} />
                <VerticalAlignBottom
                  onClick={handleBottom}
                  data-index={index}
                />
                <Edit onClick={handleEdit} data-index={index} />
              </div>
              <hr style={{ clear: "both" }} />
            </div>
          ) : (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onContextMenu={handleClick}
            >
              <span onClick={handleClick} className="completed">
                {index + 1}: {ele[0]}
              </span>
              <div style={{ float: "right" }} data-index={index}>
                <ArrowUpward onClick={handleUpOne} data-index={index} />
                <ArrowDownward onClick={handleDownOne} data-index={index} />
                <VerticalAlignTop onClick={handleTop} data-index={index} />
                <VerticalAlignBottom
                  onClick={handleBottom}
                  data-index={index}
                />
                <Edit onClick={handleEdit} data-index={index} />
              </div>
              <hr style={{ clear: "both" }} />
            </div>
          );
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Record"
          className="Modal"
          overlayClassName="Overlay"
        >
          <form action="" className="smart-green" onSubmit={handleSave}>
            <h1>{languageArray[language].change_h1} 😝</h1>
            <label>
              <span>{languageArray[language].change_origin}</span>
              <input type="text" value={selectedText} readOnly />
            </label>
            <label>
              <span>{languageArray[language].change_here}</span>
              <textarea id="message" name="message" placeholder=""></textarea>
            </label>
            <label>
              <span>&nbsp;</span>
              <button className="button" value="save" type="submit">
                {languageArray[language].change_save}
              </button>
            </label>
          </form>
        </Modal>
      </div>
    );
  } else if (show === 1) {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] > 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onContextMenu={handleClick}
            >
              <span onClick={handleClick}>
                {index + 1}: {ele[0]}
              </span>
              <div style={{ float: "right" }} data-index={index}>
                <ArrowUpward onClick={handleUpOne} data-index={index} />
                <ArrowDownward onClick={handleDownOne} data-index={index} />
                <VerticalAlignTop onClick={handleTop} data-index={index} />
                <VerticalAlignBottom
                  onClick={handleBottom}
                  data-index={index}
                />
                <Edit onClick={handleEdit} data-index={index} />
              </div>
              <hr style={{ clear: "both" }} />
            </div>
          ) : null;
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Record"
          className="Modal"
          overlayClassName="Overlay"
        >
          <form action="" className="smart-green" onSubmit={handleSave}>
            <h1>{languageArray[language].change_h1}</h1>
            <label>
              <span>{languageArray[language].change_origin}</span>
              <input type="text" value={selectedText} readOnly />
            </label>
            <label>
              <span>{languageArray[language].change_here}</span>
              <textarea id="message" name="message" placeholder=""></textarea>
            </label>
            <label>
              <span>&nbsp;</span>
              <button className="button" value="save" type="submit">
                {languageArray[language].change_save}
              </button>
            </label>
          </form>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] === 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onContextMenu={handleClick}
            >
              <span onClick={handleClick}>
                {index + 1}: {ele[0]}
              </span>
              <div style={{ float: "right" }} data-index={index}>
                <ArrowUpward onClick={handleUpOne} data-index={index} />
                <ArrowDownward onClick={handleDownOne} data-index={index} />
                <VerticalAlignTop onClick={handleTop} data-index={index} />
                <VerticalAlignBottom
                  onClick={handleBottom}
                  data-index={index}
                />
                <Edit onClick={handleEdit} data-index={index} />
              </div>
              <hr style={{ clear: "both" }} />
            </div>
          ) : null;
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Record"
          className="Modal"
          overlayClassName="Overlay"
        >
          <form action="" className="smart-green" onSubmit={handleSave}>
            <h1>{languageArray[language].change_h1}</h1>
            <label>
              <span>{languageArray[language].change_origin}</span>
              <input type="text" value={selectedText} readOnly />
            </label>
            <label>
              <span>{languageArray[language].change_here}</span>
              <textarea id="message" name="message" placeholder=""></textarea>
            </label>
            <label>
              <span>&nbsp;</span>
              <button className="button" value="save" type="submit">
                {languageArray[language].change_save}
              </button>
            </label>
          </form>
        </Modal>
      </div>
    );
  }
}

TodoList.propTypes = {
  show: PropTypes.number.isRequired,
  lists: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteOneItem: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  language: PropTypes.number.isRequired,
  liftOne: PropTypes.func.isRequired,
  downOne: PropTypes.func.isRequired,
  liftTop: PropTypes.func.isRequired,
  downBottom: PropTypes.func.isRequired,
  toSave: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    show: state.show,
    lists: state.lists,
    filterValue: state.filterValue,
    language: state.language,
  };
}

const mapDispatchToProps = {
  toggle,
  deleteOneItem,
  liftOne,
  downOne,
  liftTop,
  downBottom,
  toSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
