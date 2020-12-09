import React from 'react';
import ColorCard from './ColorCard';

class catalogue extends React.Component {
    
    render () {
        return (
            <div className="bcm-catalogue">
                {this.props.colors.map((color, index) => {
                    return color.show ? (
                        <ColorCard
                            key={color.id}
                            id={color.id}
                            name={color.name}
                            value={color.value}
                            desc={color.desc}
                            removeItem={() => this.props.removeColorHandler(index)}
                            setColorCode={(event) => this.props.setColorCodeHandler(event, index)}
                        />
                    ) : null;
                    })}
            </div>
        )
    }
}

export default catalogue;