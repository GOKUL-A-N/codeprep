export const backtrackingData = {
    definitions: "Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem.",
    explanation: "Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).",
    whenToUse: "For example, consider the SudoKo solving Problem, we try filling digits one by one. Whenever we find that current digit cannot lead to a solution, we remove it (backtrack) and try next digit. This is better than naive approach (generating all possible combinations of digits and then trying every combination one by one) as it drops a set of permutations whenever it backtracks.",
    questions: [
        {
            title: "Letter combination of a phone number ",
            id:"17",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            answer: "https://walkccc.me/LeetCode/problems/0017/?h=17",
        },
        {
            title: "Permutations",
            id:"46",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/permutations/",
            answer: "https://walkccc.me/LeetCode/problems/0046/?h=46",
        },
        {
            title: "Word Search",
            id:"79",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/word-search/",
            answer: "https://walkccc.me/LeetCode/problems/0079/?h=79",
        },
        {
            title: "Generate Parenthesis",
            id:"22",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/generate-parentheses/",
            answer: "https://walkccc.me/LeetCode/problems/0022/?h=22",
        },
        {
            title: "Knight Probability in Chessboard ",
            id:"688",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/knight-probability-in-chessboard/",
            answer: "https://walkccc.me/LeetCode/problems/0688/?h=688",
        },
        {
            title: "Subsets",
            id:"78",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/subsets/",
            answer: "https://walkccc.me/LeetCode/problems/0078/?h=78",
        },
        {
            title: "Write a Program for N Queen Problem",
            id:"51",
            difficulty: "Hard",
            question: "https://leetcode.com/problems/n-queens/",
            answer: "https://walkccc.me/LeetCode/problems/0051/?h=51",
        },
        {
            title: "Write a Program for Suduko",
            id:"37",
            difficulty: "Medium",
            question: "https://leetcode.com/problems/sudoku-solver/",
            answer: "https://walkccc.me/LeetCode/problems/0037/?h=37",
        },
    ]
}