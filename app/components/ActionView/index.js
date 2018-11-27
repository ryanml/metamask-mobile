import React from 'react';
import StyledButton from '../StyledButton';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { baseStyles, colors } from '../../styles/common';
import { strings } from '../../../locales/i18n';

const styles = StyleSheet.create({
	actionContainer: {
		borderTopColor: colors.lightGray,
		borderTopWidth: 1,
		flex: 0,
		flexDirection: 'row',
		padding: 16
	},
	button: {
		flex: 1
	},
	cancel: {
		marginRight: 8
	},
	confirm: {
		marginLeft: 8
	}
});

/**
 * Component that renders scrollable content above configurable buttons
 */
export default function ActionView({
	cancelTestID,
	confirmTestID,
	cancelText,
	children,
	confirmText,
	confirmButtonMode,
	onCancelPress,
	onConfirmPress,
	showCancelButton,
	showConfirmButton
}) {
	return (
		<View style={baseStyles.flexGrow}>
			<KeyboardAwareScrollView style={baseStyles.flexGrow} resetScrollToCoords={{ x: 0, y: 0 }}>
				{children}
			</KeyboardAwareScrollView>
			<View style={styles.actionContainer}>
				{showCancelButton && (
					<StyledButton
						testID={cancelTestID}
						type={'cancel'}
						onPress={onCancelPress}
						containerStyle={[styles.button, styles.cancel]}
					>
						{cancelText.toUpperCase()}
					</StyledButton>
				)}
				{showConfirmButton && (
					<StyledButton
						testID={confirmTestID}
						type={confirmButtonMode}
						onPress={onConfirmPress}
						containerStyle={[styles.button, styles.confirm]}
					>
						{confirmText.toUpperCase()}
					</StyledButton>
				)}
			</View>
		</View>
	);
}

ActionView.defaultProps = {
	cancelText: strings('action_view.cancel'),
	confirmButtonMode: 'normal',
	confirmText: strings('action_view.confirm'),
	confirmTestID: '',
	cancelTestID: '',
	showCancelButton: true,
	showConfirmButton: true
};

ActionView.propTypes = {
	/**
	 * TestID for the cancel button
	 */
	cancelTestID: PropTypes.string,
	/**
	 * TestID for the confirm button
	 */
	confirmTestID: PropTypes.string,
	/**
	 * Text to show in the cancel button
	 */
	cancelText: PropTypes.string,
	/**
	 * Content to display above the action buttons
	 */
	children: PropTypes.node,
	/**
	 * Type of button to show as the confirm button
	 */
	confirmButtonMode: PropTypes.oneOf(['normal', 'confirm']),
	/**
	 * Text to show in the confirm button
	 */
	confirmText: PropTypes.string,
	/**
	 * Called when the cancel button is clicked
	 */
	onCancelPress: PropTypes.func,
	/**
	 * Called when the confirm button is clicked
	 */
	onConfirmPress: PropTypes.func,
	/**
	 * Whether cancel button is shown
	 */
	showCancelButton: PropTypes.bool,
	/**
	 * Whether confirm button is shown
	 */
	showConfirmButton: PropTypes.bool
};