const MOBILE_USER_AGENT_REGEX = /android|iphone|ipod|iemobile/i;

function isMobile() {
  return !!navigator.userAgent.match(MOBILE_USER_AGENT_REGEX);
}