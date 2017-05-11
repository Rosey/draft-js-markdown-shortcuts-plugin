'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createImageStrategy = function createImageStrategy() {
  var findImageEntities = function findImageEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      try {
        var entityKey = character.getEntity();
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMG';
      } catch (e) {}
    }, callback);
  };
  return findImageEntities;
};

exports.default = createImageStrategy;