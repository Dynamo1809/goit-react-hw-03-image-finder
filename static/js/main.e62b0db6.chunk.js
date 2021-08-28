(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),s=(a(16),a(3)),i=a(4),l=a(6),u=a(5),h=a(10),d=a(11),m=a.n(d),j=a(1),p=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.onOpenModal;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{onClick:function(){return r(a)},src:t,alt:"",className:"ImageGalleryItem-image"})})},b=function(e){var t=e.onClick;return Object(j.jsx)("button",{onClick:t,type:"button",className:"Button",children:"Load more"})},g="21948076-53f9c976759f5ce811ed96a6f",f="https://pixabay.com/api/?image_type=photo&orientation=horizontal&";var y={fetchPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return fetch("".concat(f,"q=").concat(e,"&page=").concat(t,"&key=").concat(g,"&per_page=").concat(a)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u043c\u0430\u0454 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c: ".concat(e)))}))}},v="idle",O="resolved",S="rejected",x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],error:null,isLoader:!1,page:1,status:"idle"},e.handleLoadMoreClick=function(t){e.setState((function(e){return{page:e.page+1}}))},e.resetPage=function(){e.setState({page:1,status:v})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.props.searchQuery,n=this.state.page;if(e.searchQuery!==r||t.page!==n){if(this.setState({isLoader:!0}),e.searchQuery!==r)return this.resetPage(),void y.fetchPhotos(r).then((function(e){a.setState({images:e.hits,status:O,isLoader:!1})})).catch((function(e){return a.setState({error:e.message,status:S})}));t.page!==n&&1!==n&&y.fetchPhotos(r,n).then((function(e){a.setState((function(t){var a=t.images;return{images:[].concat(Object(h.a)(a),Object(h.a)(e.hits)),status:O,isLoader:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return a.setState({error:e.message,status:S})}))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.status,n=t.error,c=t.isLoader,o=this.props.searchQuery;return"idle"===r?null:"rejected"===r?Object(j.jsx)("h1",{style:{textAlign:"center"},children:n}):"resolved"===r?0!==a.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"ImageGallery",children:a.map((function(t){var a=t.id,r=t.webformatURL,n=t.largeImageURL;return Object(j.jsx)(p,{onOpenModal:e.props.onOpenModal,webformatURL:r,largeImageURL:n},a)}))}),c&&Object(j.jsx)(m.a,{className:"Loader",type:"ThreeDots",color:"#3f51b5"}),a.length%12===0&&Object(j.jsx)(b,{onClick:this.handleLoadMoreClick})]}):Object(j.jsxs)("h2",{style:{textAlign:"center"},children:["Sorry, nothing was found for query '",o,"'"]}):void 0}}]),a}(r.Component),k=a(8),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchChange=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a.toLowerCase()})},e.handleFormSubmit=function(t){var a=e.state.searchQuery;t.preventDefault(),""!==a.trim()?(e.props.onSubmit(a),e.reset()):k.b.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442")},e.reset=function(){e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{onSubmit:this.handleFormSubmit,className:"SearchForm",children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:e,autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleSearchChange})]})})}}]),a}(r.Component),C=document.querySelector("#modal-root"),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDownClick=function(t){"Escape"===t.code&&e.props.onClose("")},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose("")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDownClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDownClick)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:this.props.src,alt:""})})}),C)}}]),a}(r.Component),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",modalImageSrc:""},e.handleSubmit=function(t){e.state.searchQuery!==t?e.setState({searchQuery:t}):Object(k.b)("Search name '".concat(t,"' already used"))},e.toggleModal=function(t){return e.setState({modalImageSrc:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.modalImageSrc;return Object(j.jsxs)("div",{className:"App",children:[a&&Object(j.jsx)(L,{src:a,onClose:this.toggleModal}),Object(j.jsx)(k.a,{autoClose:1500}),Object(j.jsx)(w,{onSubmit:this.handleSubmit}),Object(j.jsx)(x,{onOpenModal:this.toggleModal,searchQuery:t})]})}}]),a}(r.Component);a(38),a(39);o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e62b0db6.chunk.js.map