const createImageStrategy = () => {
  const findImageEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges((character) => {
      try {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'IMG'
        );
      } catch( e ) {}
    }, callback);
  };
  return findImageEntities;
};

export default createImageStrategy;
