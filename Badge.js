/*
 * @providesModule Component/Badge
 */


'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Badge extends Component {

    render() {
        const {
            label,
            color,
            backgroundColor,
            borderColor,
            borderRadius,
            borderWidth
            } = this.props;

        return (
            <View style={[styles.container, {backgroundColor: backgroundColor,borderColor: borderColor, borderRadius:borderRadius,borderWidth:borderWidth}]}>
                <Text style={[styles.label, {color:color,}]}>{label}</Text>
            </View>
        );
    }
}


Badge.defaultProps = {
    color: '#fff',
    size: 18,
    backgroundColor: '#0f0',
    borderColor: '#0f0',
    borderWidth: 1,
    borderRadius: 80,
};

Badge.propTypes = {
    /** label color */
    color: React.PropTypes.string,
    /** font size */
    size: React.PropTypes.number,
    /** background color */
    backgroundColor: React.PropTypes.string,
    /** border color */
    borderColor: React.PropTypes.string,
    /** border radius */
    borderRadius: React.PropTypes.number,
    /** border width */
    borderWidth: React.PropTypes.number,
    /** label */
    label: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: -1,
    },
    label: {

    },
});

module.exports = Badge;
