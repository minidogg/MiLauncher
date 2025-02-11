export default function loader(source) {
    const options = this.getOptions();
  
    source = source.replace(/\[name\]/g, options.name);
  
    return `export default ${JSON.stringify(source)}`;
}