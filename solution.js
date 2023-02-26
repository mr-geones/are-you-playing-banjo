function areYouPlayingBanjo(name) {
  if(name.startsWith('R', 0) || name.startsWith('r', 0)) {
    return `${name} plays banjo`;
  }
  else {
    return `${name} does not play banjo`;
  }
}
