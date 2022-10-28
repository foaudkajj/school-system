const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentEvaluationTable20221016145125 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student_evaluation\`
            change column \`behaviout\` \`behaviour\` enum('Good','Mid','Bad'),
            drop \`fee\`,
            drop \`transport_fee\`,
            drop \`discount\` ;`,);
    }

    async down(queryRunner) {
    }

}
