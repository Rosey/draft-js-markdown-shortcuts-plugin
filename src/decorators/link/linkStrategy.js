const createLinkStrategy = () => {
  const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
      try {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      } catch( e ) {}
    }, callback);
  };
  return findLinkEntities;
};

export default createLinkStrategy;
