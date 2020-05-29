# Files

## Read all contents of a file

```Java
File file = new File(filepath);
String str = new String(Files.readAllBytes(file.toPath()));
```

## Get the path of a file

```Java
TestUtils.class.getResource(filename).getFile()
```