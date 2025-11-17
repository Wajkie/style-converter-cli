# style-converter

🎨 CLI tool to convert Tailwind CSS and Bootstrap classes to CSS Modules with SCSS

**[🚀 Live Demo](https://styleconverter.netlify.app/)** | **[📖 GitHub](https://github.com/Wajkie/tailwindConverter)**

## Installation

Install as a dev dependency in your project:

```bash
npm install --save-dev style-converter
```

Add to your `package.json` scripts:

```json
{
  "scripts": {
    "convert": "style-convert"
  }
}
```

## Usage

### Setup

After installing, add scripts to your `package.json`:

```json
{
  "scripts": {
    "convert": "style-convert",
    "convert:replace": "style-convert all --replace"
  }
}
```

### Basic Usage

Run via npm scripts:
```bash
npm run convert myFeature
npm run convert:replace
```

### Command Format

```bash
npm run convert -- <featureName|all> [options]
```

Convert a single feature folder:
```bash
npm run convert loginForm
```

Convert all features in `src/features/`:
```bash
npm run convert all
```

### Options

- `--replace` - Automatically update your TSX files to use CSS Modules
- `--framework <tailwind|bootstrap>` - Select framework (default: tailwind)

### Examples

```bash
# Convert Tailwind classes to CSS Modules
npm run convert loginForm

# Convert and update TSX files automatically
npm run convert -- loginForm --replace

# Convert all features with automatic TSX updates
npm run convert -- all --replace

# Convert Bootstrap classes instead
npm run convert -- myComponent --framework bootstrap
```

## What It Does

1. **Scans** your React/TSX files for framework CSS classes
2. **Converts** them to SCSS with semantic selectors
3. **Generates** CSS Module files (`.module.scss`)
4. **Creates** detailed conversion reports
5. **Optionally updates** your TSX files to use CSS Modules

## Output Files

After running the converter, you'll get:

- `<feature>.module.scss` - Your converted styles
- `_variables.scss` - SCSS variables
- `tailwind.mixins.scss` - Reusable mixins
- `CONVERSION_GUIDE.md` - Detailed conversion report
- `CONVERSION_REPORT.md` - Summary of all conversions (when using `all`)
- `PROPERTY_DUPLICATES_REPORT.md` - Optimization suggestions

## Example

**Before** (`LoginForm.tsx`):
```tsx
<div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-xl">
  <h2 className="text-2xl font-bold text-gray-800">Login</h2>
  <input className="border border-gray-300 rounded px-3 py-2" />
</div>
```

**After** (`LoginForm.tsx` with `--replace`):
```tsx
import styles from './loginForm.module.scss';

<div className={styles['div']}>
  <h2 className={styles['h2']}>Login</h2>
  <input className={styles['input']} />
</div>
```

**Generated** (`loginForm.module.scss`):
```scss
@use "./tailwind.mixins.scss" as *;

.div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.input {
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
```

## Features

✅ Converts Tailwind CSS classes to SCSS  
✅ Converts Bootstrap classes to SCSS  
✅ Generates semantic CSS Module selectors  
✅ Supports responsive classes (`md:`, `lg:`, etc.)  
✅ Supports pseudo-classes (`:hover`, `:focus`, etc.)  
✅ Automatic TSX file updates with `--replace`  
✅ Detailed conversion reports  
✅ Duplicate property detection  
✅ Optimization suggestions  

## Project Structure

Your project should have a structure like:

```
src/
  features/
    loginForm/
      LoginForm.tsx
    navbar/
      Navbar.tsx
```

After conversion:

```
src/
  features/
    loginForm/
      LoginForm.tsx
      loginForm.module.scss
      _variables.scss
      tailwind.mixins.scss
      CONVERSION_GUIDE.md
```

## Requirements

- Node.js 14 or higher
- React/TSX project with Tailwind CSS or Bootstrap

## Quick Setup Example

```bash
# 1. Install in your project
npm install --save-dev style-converter

# 2. Add scripts to package.json
npm pkg set scripts.convert="style-convert"
npm pkg set scripts.convert:all="style-convert all --replace"

# 3. Run conversion
npm run convert myFeature

# 4. Convert all features and update TSX
npm run convert:all
```

## License

MIT

## Author

Wajkie

## Repository

https://github.com/Wajkie/tailwindConverter
