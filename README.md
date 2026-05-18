# KSchema CLI

A CLI tool for generating Express.js API structures, CRUD endpoints, route hierarchies, and JSON-based table APIs using the KSchema ecosystem.

Repository:

---

# Features

* Generate API folder structure
* Generate CRUD endpoints automatically
* Auto-hook endpoints into Express app
* JSON-based data storage
* Modular route architecture
* Version-based APIs (`V1`, `V2`)
* Table-based endpoint generation
* Automatic endpoint registration
* Express Router architecture

---

# Recommended Node.js Version

Use:

```bash
Node.js 20 LTS
```

Some generators may fail on newer Node.js versions like Node 24.

Check installed versions:

```bash
node -v
npm -v
```

---

# Installation

## Using NPX

```bash
npx @keshavsoft/kschema-api-gen
```

## Global Installation youtube

```bash
npm install -g @keshavsoft/kschema-api-gen
```

Then run:

```bash
kschema-api-gen
```

---

# Available Commands

```bash
StartEndPoint
AddSubRoute
AddTableName
ShowAll
CreateApi
InsertApi
```

---

# Command Details

## StartEndPoint

Creates the base API folder.

### Command

```bash
npx @keshavsoft/kschema-api-gen StartEndPoint
```

### Output

```txt
Api/
```

---

## AddSubRoute

Creates API version folders.

### Command

```bash
cd Api
npx @keshavsoft/kschema-api-gen AddSubRoute
```

### Output

```txt
Api/
   V1/
```

---

## AddTableName

Creates a table/module folder.

### Command

```bash
cd V1
npx @keshavsoft/kschema-api-gen AddTableName
```

### Output

```txt
Api/
   V1/
      KSTable1
```

Example:

```txt
Api/
   V1/
      Accounts/
```

---

## ShowAll

Creates a GET endpoint structure for reading all records.

### Command

```bash
cd KSTable1
npx @keshavsoft/kschema-api-gen ShowAll
```

### Output

```txt
Api/
   V1/
      KSTable1/
         ShowAll/
            controller.js
            service.js
            errors.js
```

---

## CreateApi

Creates endpoint files and automatically hooks them into Express routing.

### Command

Run this from project root:

```bash
npx @keshavsoft/kschema-api-gen CreateApi Api/V1/KSTable1/ShowAll
```

### InsertApi

Creates POST/Insert endpoint structure.

### Command

```bash
npx @keshavsoft/kschema-api-gen InsertApi Api/V1/KSTable1/Insert
```

## Generated Architecture

```txt
Api/
   V1/
      routes.js

      KSTable1/
         end-points.js

         ShowAll/
            controller.js
            service.js
            errors.js
```

# Final Endpoint Example

```txt
GET /V1/KSTable1/ShowAll
```

Browser:

```txt
http://localhost:3000/V1/KSTable1/ShowAll
```
