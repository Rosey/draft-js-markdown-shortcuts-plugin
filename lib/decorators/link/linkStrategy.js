'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createLinkStrategy = function createLinkStrategy() {
  var findLinkEntities = function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      try {
        var entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
      } catch (e) {}
    }, callback);
  };
  return findLinkEntities;
};

exports.default = createLinkStrategy;