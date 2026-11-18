# Rebuilds index.html from the source files. Run: python3 build.py
from pathlib import Path
d = Path(__file__).resolve().parent
src = d / "src"
h = (src / "app.html").read_text()
for tag, f in [("/*SYLLABUS*/", "syllabus.js"), ("/*QUESTIONS*/", "questions.js"), ("/*APP*/", "app.js")]:
    h = h.replace(tag, (src / f).read_text())
(d / "index.html").write_text(h)
print("Built index.html")
