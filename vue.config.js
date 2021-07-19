// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
  // vue.config.js
module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production'
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOirgin: true,
        ws:true,
    	}
    }
  }
}
