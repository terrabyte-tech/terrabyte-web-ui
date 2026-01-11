let nunjucksEnv = null;

function setNunjucksEnvironment(env) {
  nunjucksEnv = env;
}

module.exports = {
  registerFilters: require("./utils/filters"),
  registerTransforms: require("./utils/transforms"),
  setNunjucksEnvironment,
  nunjucksEnv
};