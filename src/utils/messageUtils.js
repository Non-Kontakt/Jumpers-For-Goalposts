/**
 * Message visibility and filtering utilities
 * Centralizes the logic for checking if a message should be visible based on pendingUntilWeek
 */

/**
 * Check if a message should be visible given the current week
 * Messages can be marked as pending until a certain week, at which point they become visible
 * @param {Object} msg - The message object
 * @param {number} msg.pendingUntilWeek - Optional week number until which the message is hidden
 * @param {number} currentWeek - The current week number (defaults to 1 if not provided)
 * @returns {boolean} - True if the message should be visible, false otherwise
 */
export function isMessageVisible(msg, currentWeek = 1) {
  return !msg.pendingUntilWeek || currentWeek >= msg.pendingUntilWeek;
}
