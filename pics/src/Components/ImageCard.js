import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef(); // this.imageRef is an simple instance variable!
    }
    state = { spans: 0 };

    setSpans = () => {
        try {
            const height = this.imageRef.current.clientHeight;
            const spans = Math.ceil(height / 10 + 1);
            this.setState({ spans: spans } );
        } catch (e) {
            alert(e)
        }
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        );
    };
}

export default ImageCard;