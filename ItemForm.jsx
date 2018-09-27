import React from 'react';

class ItemForm extends React.Component {
    render() {

        var item = this.props.item;

        if (!item) {
            return '';
        }

        return (
            <div>
                <form>
                    <div className="close_form">
                        <span>[🗙]</span>
                    </div>
                    <h3>Create a new item</h3>
                    <p>
                        <label>ID:</label>
                        <input name="id" 
                               defaultValue={item.id} />
                    </p>
                    <p>
                        <label>Title:</label>
                        <input name="title" 
                               defaultValue={item.title} />
                    </p>
                    <p>
                        <label>Artist:</label>
                        <input name="artist" 
                               defaultValue={item.artist} />
                    </p>
                    <p>
                        <label>Album:</label>
                        <input name="album" 
                               defaultValue={item.album} />
                    </p>

                    <div className="create">
                        <button>
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ItemForm;
