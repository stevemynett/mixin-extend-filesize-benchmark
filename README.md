# Less Extends vs Mixin Gzip Benchmarking

We know Mixins end up being more KB than Extends, but what about when they are gzipped?

## Full Article
I wrote about it at more length.

## Results

|                   | Mixin  | Mixin GZIP  | Extend   | Extend GZIP   |
|-------------------|--------|-------------|----------|---------------|
| Clearfix          | 96k    | 6.5k        | 4.4k     | 1.5k          |
| Image Replacement | 53k    | 2.1k        | 4.4k     | 1.5k          |
| Box               | 50k    | 2k          | 4.4k     | 1.5k          |
| *Average*         | 66.3   | 3.5k        | 4.4k     | 1.5k          |