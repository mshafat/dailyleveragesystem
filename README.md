# The Daily Leverage Method

**0 + 1 + 2 = 4**

A high-performance productivity system built on limitation, not expansion.

---

## Created by Munadil Shafat
Productivity enthusiast from Bangladesh

📅 Conceived: April 23, 2026
📛 Named: April 25, 2026

---

## What Is This?

Most productivity systems promise "unlimited potential." 
They lie.

Humans are limited beings. Limited energy. Limited attention. Limited hours.

The Daily Leverage Method embraces this truth.

> *"True focus and discipline are the art of self-limitation."*

---

## The Core Equations

### Strategic Layer (Quarterly)
**3 - 2 - 1 = 0**

- 3 = 3-Year Vision
- 2 = 2 Major Milestones  
- 1 = Current Year Goal
- 0 = This Quarter's Target

### Daily Layer (Every Morning)
**0 + 1 + 2 = 4**

- 0 = Your Quarterly Goal
- 1 = MUST (One lead action)
- 2 = NEXT (Two flow actions)
- 4 = BEST (One more thing)

---

## Key Rules

| Rule | Summary |
|------|---------|
| **Just Dump, Don't Do** | Brain dump distractions. Stay on task. |
| **Batch Mode** | Collect small tasks. Execute them in one go. |
| **3 Chances Rule** | 3 blocks per day. Ruin one? Restart the next. |

---

## Companion App

🌐 **Live App:** dailyleveragesystem.netlify.app

Minimal. Free. No login required.
Edit only: Previous day | Today | Tomorrow

---

## Open Source

This method and app are **completely free and open source**.

✅ Methodology: Free to use and share
✅ App Source Code: Open for contribution
✅ Only ask: Keep credit to the creator

---

## Connect

📧 Email: munadilshafat[at]gmail.com  
🌍 Country: Bangladesh

---

## License

MIT — Use freely. Share widely. Give credit.

---

*"By embracing your limits, you finally find the leverage to move your world."*

---

## JSON Data Structure
```
{
  "goal": "The primary objective or 'Vision 0' text",
  "weekStart": "0", 
  "notes": {
    "YYYY-MM-DD": {
      "t1": "Text for the MUST task",
      "c1": true,
      "t2a": "Text for the first NEXT task",
      "c2a": false,
      "t2b": "Text for the second NEXT task",
      "c2b": false,
      "t4": "Text for the BEST task",
      "c4": false,
      "bd": "Detailed content of the Brain Dump section"
    }
  }
}

```

### Field Definitions:
| Field     | Type    | Description                                        |
|-----------|---------|----------------------------------------------------|
| goal      | String  | Global vision/goal stored in levGoal.              |
| weekStart | String  | Day index (0-6) stored in levWeekStart.            |
| notes     | Object  | Map of dates containing task objects.              |
| t[x]      | String  | The task description/text.                         |
| c[x]      | Boolean | Checkbox status (Completed = true).                |
| bd        | String  | Multi-line text from the 'Brain Dump' (flip side). |


### Technical Implementation Notes:
Storage Mechanism: The data is stored in the browser's localStorage using the keys levNotes, levGoal, and levWeekStart.

Data Pruning: The autoSave() function automatically deletes a date key from the notes object if all its fields (t1, t2a, t2b, t4, bd) are empty, ensuring the file size remains optimized.

Backward Compatibility: This structure is consistent across the 3.6.x series, allowing for seamless imports and exports between versions.

## ⚖️ Disclaimer
This is a completely free and open-source application. It is designed to work alongside your existing tools, not necessarily replace them. Since all data is stored in Local Storage, users are strictly advised to manually Export Backup regularly to prevent data loss.
