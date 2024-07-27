import{j as e,L as a,a as s}from"./index-DO59q21m.js";import{P as t,N as p}from"./Navbar-Bx9RMI9z.js";function m({items:o,className:r,active:i,setActive:l,...c}){return e.jsx("ul",{className:`flex items-center border-b border-b-[#dfe7ef] w-full ${r}`,...c,children:o==null?void 0:o.map((d,n)=>e.jsx("li",{onClick:()=>l(n),className:`p-3 px-7 uppercase cursor-pointer transition-all border-b border-b-[#dfe7ef] ${i===n?"text-[var(--primary-color)] border-b-[var(--primary-color)]":"text-[#374151]"} hover:border-b-[#111827] text-[14px]`,style:{letterSpacing:"1px"},children:d.name},n))})}const u=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        appendTo: 'self',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
`,h=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

root.attachShadow({ mode: 'open' }); // Open the shadowRoot
const mountHere = root.shadowRoot;

const options = { appendTo: mountHere, styleContainer: mountHere};

ReactDOM.createRoot(mountHere).render(
  <React.StrictMode>
    <PrimeReactProvider value={options}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
`,f=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        cssTransition: false,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,v=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        filterMatchMode: {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
         },
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,y=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        hideOverlaysOnDocumentScrolling: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}

//_app.css
body {
  margin: 0px;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}`,x=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        inputStyle: 'filled',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,j=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nonce: '.........',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,P=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nullSortOrder: 1,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,b=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        ripple: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,g=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        zIndex: {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlaypanel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
            toast: 1200     // toast
        },
        autoZIndex: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,N=`//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        locale: 'de',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}`,R="import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';",M="locale('en');",_=`addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    //...
});`;function A(){return e.jsxs("section",{className:"flex-1 p-2",children:[e.jsx("h1",{children:"Configuration"}),e.jsx("div",{className:"doc-label",children:"Global configuration options of the components."}),e.jsx(t,{id:"append-to",intro:"AppendTo",code:u,description:e.jsxs("span",{children:["For components with an overlay like a dropdown, popups can be mounted either into the component or DOM element instance using this option. Valid values are any DOM Element like document body and ",e.jsx("span",{className:"tag",children:"self"}),". By default all popups are appended to document body via Portals."]})}),e.jsx(t,{id:"style-container",intro:"StyleContainer",code:h,description:e.jsxs("span",{children:["This option allows ",e.jsx("span",{className:"tag",children:"useStyle"})," to insert dynamic CSS styles into a specific container. This is useful when styles need to be scoped such as in a ",e.jsx(a,{to:"",className:"p-undrline-link",children:"Shadow DOM"}),". By default all dynamic styles are appended to ",e.jsx("span",{className:"tag",children:"document.head"}),"."]})}),e.jsx(t,{id:"css-transition",intro:"CSS Transition",code:f,description:e.jsxs("span",{children:["PrimeReact components utilize ",e.jsx("span",{className:"p-undrline-link",children:"react-transition-group"})," internally to implement animations. Setting ",e.jsx("span",{className:"tag",children:"cssTransition"})," to false disables all animations."]})}),e.jsx(t,{id:"filter-mode",intro:"Filter Mode",code:v,description:e.jsx("span",{children:"Default filter modes to display on DataTable filter menus."})}),e.jsx(t,{id:"hide-overlays-on-viewport-change",intro:"Hide Overlays on Viewport Change",code:y,description:e.jsxs("span",{children:["Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the overlay follow the scroll. Default value is false. IMPORTANT: Your ",e.jsx("span",{className:"tag",children:"document.body"})," must have ",e.jsx("span",{className:"tag",children:"overflow"})," CSS on this to work properly."]})}),e.jsx(t,{id:"input-style",intro:"InputStyle",code:x,description:e.jsxs("span",{children:["Input fields come in two styles, default is ",e.jsx("span",{className:"tag",children:"outlined"})," with borders around the field whereas ",e.jsx("span",{className:"tag",children:"filled"})," alternative adds a background color to the field. Applying ",e.jsx("span",{className:"tag",children:"p-input-filled"})," to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to ",e.jsx("span",{className:"tag",children:"filled"})," at PrimeReact configuration as well."]})}),e.jsx(t,{id:"nonce",intro:"Nonce",code:j,description:e.jsxs("span",{children:["The ",e.jsx(a,{to:"",className:"p-undrline-link",children:"nonce"})," value to use on dynamically generated style elements."]})}),e.jsx(t,{id:"null-sort-order",intro:"Null Sort Order",code:P,description:e.jsxs("span",{children:["Determines how ",e.jsx("span",{className:"tag",children:"null"})," values are sorted. The default value of ",e.jsx("span",{className:"tag",children:"1"})," means sort like Excel with all NULL values at the bottom of the list. A value of ",e.jsx("span",{className:"tag",children:"-1"})," sorts NULL at the top of the list in ascending mode and at the bottom of the list in descending mode."]})}),e.jsx(t,{id:"ripple",intro:"Ripple",code:b,description:e.jsx("span",{children:"Ripple is an optional animation for the supported components such as buttons. It is disabled by default."})}),e.jsx(t,{id:"z-index",intro:"ZIndex",code:g,description:e.jsxs("span",{children:["ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeReact configuration offers the ",e.jsx("span",{className:"tag",children:"zIndex"})," property to customize the default values for components categories. Default values are described below and can be customized when setting up the context value.",e.jsx("br",{}),"The ZIndex of all components is increased according to their groups in harmony with each other. When ",e.jsx("span",{className:"tag",children:"autoZIndex"})," is false, each group increments its zIndex within itself."]})}),e.jsx(t,{id:"locale",className:"pb-0",intro:"Locale",code:"",hideCodeContainer:!0,description:""}),e.jsx(t,{id:"setup",intro:"Setup",className:"!pt-0",code:N,description:e.jsxs("span",{children:["To establish the default locale for your entire application, you can utilize the ",e.jsx("span",{className:"tag",children:"PrimeReactProvider"}),"."]})}),e.jsx(t,{id:"import",intro:"Import",className:"!pt-0",code:R,description:e.jsxs("span",{children:["Configuration is managed by the ",e.jsx(a,{to:"",className:"p-undrline-link",children:"Locale API"})," imported from ",e.jsx("span",{className:"tag",children:"primereact/api"}),"."]})}),e.jsx(t,{id:"set-locale",intro:"Set Locale",className:"!pt-0",code:M,description:e.jsxs("span",{children:["An available locale can be set with ",e.jsx("span",{className:"tag",children:"locale"})," method at anytime."]})}),e.jsx(t,{id:"add-locale",intro:"Add Locale",className:"!pt-0",code:_,description:e.jsxs("span",{children:["New locale settings can be added using ",e.jsx("span",{className:"tag",children:"addLocale"})," method."]})}),e.jsx(t,{id:"repository",intro:"Repository",className:"!pt-0",code:"",hideCodeContainer:!0,description:e.jsxs("span",{children:["Repository Ready to use settings for locales are available at the community supported ",e.jsx(a,{to:"",className:"p-undrline-link",children:"PrimeLocale"})," repository. We'd appreciate if you could contribute to this repository with pull requests and share it with the rest of the community."]})})]})}const S=[{name:"AppendTo",href:"#append-to",className:"active"},{name:"StyleContainer",href:"#style-container"},{name:"CSS Transition",href:"#css-transition"},{name:"Filter Mode",href:"#filter-mode"},{name:"Hide Overlays on Viewport Change",href:"#hide-overlays-on-viewport-change"},{name:"InputStyle",href:"#input-style"},{name:"Nonce",href:"#nonce"},{name:"Null Sort Order",href:"#null-sort-order"},{name:"Ripple",href:"#ripple"},{name:"ZIndex",href:"#z-index"},{name:"Locale",href:"#locale",children:[{name:"Setup",href:"#setup"},{name:"Import",href:"#import"},{name:"Set Locale",href:"#set-locale"},{name:"Add Locale",href:"#add-locale"},{name:"Repository",href:"#repository"}]}];function C(){const o=[{name:"overview"},{name:"api"}],[r,i]=s.useState(0);return e.jsxs(s.Fragment,{children:[e.jsxs("div",{className:"flex-1 w-[800px]",children:[e.jsx(m,{active:r,setActive:i,items:o}),e.jsx(A,{})]}),e.jsx(p,{routes:S})]})}export{C as default};
